import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { ContactService } from '../../services/contact.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

Swiper.use([Navigation, Pagination, Autoplay]);

interface Auction {
  [x: string]: any;
  timeLeft: string;
  timeToStart: string;
  id: number;
  name: string;
  start: string;
  end: string;
  content: string;
  imagePath: string;
  pdfPath: string;
  isDeleted: boolean;
  isPermanentlyDeleted: boolean;
  status?: 'current' | 'upcoming' | 'ended';
  imageUrl?: string;
  pdfUrl?: string;
}

import { ContactService } from '../../services/contact.service';
import { AuctionService } from '../../services/auction.service/auction.service';
import { interval, Subscription } from 'rxjs';

Swiper.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PackagesComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('tabsContent') tabsContent?: ElementRef<HTMLElement>;

  swiper: Swiper | null = null;
  currentLang: 'ar' | 'en' = 'ar';
  auctions: Auction[] = [];
  filteredAuctions: Auction[] = [];
  selectedTab: 'all' | 'current' | 'upcoming' | 'ended' = 'all';
  isLoading = false;

  private subscriptions = new Subscription();
  private timerSubscription?: Subscription;

  constructor(
    private cdr: ChangeDetectorRef,
    private http: HttpClient,
    public contactService: ContactService,
    private auctionService: AuctionService
  ) {}

  ngOnInit(): void {
    this.currentLang = localStorage.getItem('lang') === 'en' ? 'en' : 'ar';
    this.loadAuctions();
    this.startTimer();
  }

  ngAfterViewInit(): void {
    this.updateLayout();
  }

  ngOnDestroy(): void {
    this.destroySwiper();
    this.subscriptions.unsubscribe();
    this.stopTimer();
  }

  /** -------------------- Timer -------------------- **/
  private startTimer(): void {
    this.timerSubscription = interval(1000).subscribe(() => {
      this.updateAuctionTimes();
      this.cdr.markForCheck();
    });
  }

  private stopTimer(): void {
    this.timerSubscription?.unsubscribe();
  }

  private updateAuctionTimes(): void {
    this.auctions.forEach((a) => {
      a.timeLeft = this.calculateCountdown(a.end);
      a.timeToStart = this.calculateCountdown(a.start);
    });
  }

  calculateCountdown(targetDate: string): string {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    let diff = target - now;

    if (diff <= 0) {
      return this.currentLang === 'ar' ? 'انتهى' : 'Ended';
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));

    if (this.currentLang === 'ar') {
      return `${days} يوم ${hours} ساعة ${minutes} دقيقة`;
    } else {
      return `${days} days ${hours} hours ${minutes} minutes`;
    }
  }

  private padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  /** -------------------- Data Loading -------------------- **/
  private loadAuctions(): void {
    this.isLoading = true;

    const sub = this.auctionService.getAllAuctions().subscribe({
      next: (data: any[]) => {
        this.auctions = data.map((auction) => {
          const processedAuction: Auction = {
            ...auction,
            status: (() => {
              const status = this.auctionService.calculateAuctionStatus(
                auction.start,
                auction.end
              );
              console.log(`Calculated status for ${auction.name}:`, status);
              return status;
            })(),
            timeLeft: this.calculateCountdown(auction.end) || '',
            timeToStart: this.calculateCountdown(auction.start) || '',
            imageUrl: this.getFullImageUrl(auction.imagePath),
          };
          return processedAuction;
        });

        this.applyFilter();
        this.isLoading = false;
        this.updateLayout();
      },
      error: (err) => {
        console.error('Error loading auctions', err);
        this.isLoading = false;
      },
    });

    this.subscriptions.add(sub);
  }
  private getFullImageUrl(relativePath: string): string {
    return `https://osuselriadah.somee.com/${relativePath}`;
  }

  /** -------------------- Filtering -------------------- **/
  selectTab(tab: 'all' | 'current' | 'upcoming' | 'ended'): void {
    this.selectedTab = tab;
    this.applyFilter();
    this.updateLayout();
  }

  private applyFilter(): void {
    console.log('Applying filter for:', this.selectedTab);
    console.log('All auctions:', this.auctions);

    if (this.selectedTab === 'all') {
      this.filteredAuctions = [...this.auctions];
    } else {
      this.filteredAuctions = this.auctions.filter(
        (a) => a.status === this.selectedTab
      );
    }

    console.log('Filtered result:', this.filteredAuctions);
  }
  /** -------------------- Layout / Swiper -------------------- **/
  private updateLayout(): void {
    this.handleSingleCardLayout();
    this.initializeSwiper();
  }

  private handleSingleCardLayout(): void {
    if (!this.tabsContent?.nativeElement) return;

    const cards =
      this.tabsContent.nativeElement.querySelectorAll('.auction-card');
    this.tabsContent.nativeElement.classList.toggle(
      'single-card',
      cards.length === 1
    );
  }

  private initializeSwiper(): void {
    this.destroySwiper();

    if (this.filteredAuctions.length > 0) {
      setTimeout(() => {
        this.createSwiper();
      });
    }
  }

  private createSwiper(): void {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: false,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }

  private destroySwiper(): void {
    this.swiper?.destroy(true, true);
    this.swiper = null;
  }
}

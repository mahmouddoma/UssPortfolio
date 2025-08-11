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
  noAuctionsMessage = '';

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

    return this.currentLang === 'ar'
      ? `${days} يوم ${hours} ساعة ${minutes} دقيقة`
      : `${days} days ${hours} hours ${minutes} minutes`;
  }

  /** -------------------- Data Loading -------------------- **/
  private loadAuctions(): void {
    this.isLoading = true;

    const sub = this.auctionService.getAllAuctions().subscribe({
      next: (data: any[]) => {
        console.log('API returned auctions:', data);

        this.auctions = data.map((auction) => {
          const status =
            this.auctionService.calculateAuctionStatus(
              auction.start,
              auction.end
            ) || 'unknown'; // fallback

          return {
            ...auction,
            status,
            timeLeft: this.calculateCountdown(auction.end) || '',
            timeToStart: this.calculateCountdown(auction.start) || '',
            imageUrl: this.getFullImageUrl(auction.imagePath),
          };
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

  applyFilter(): void {
    console.log('Filtering for tab:', this.selectedTab);

    if (this.selectedTab === 'all') {
      this.filteredAuctions = [...this.auctions];
    } else {
      this.filteredAuctions = this.auctions.filter(
        (a) => a.status === this.selectedTab
      );
    }

    if (this.filteredAuctions.length === 0) {
      this.noAuctionsMessage =
        this.currentLang === 'ar'
          ? 'لا يوجد مزادات حالياً'
          : 'No auctions available at the moment';
      console.warn('No auctions found for this tab');
    } else {
      this.noAuctionsMessage = '';
    }

    console.log('Filtered auctions count:', this.filteredAuctions.length);
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

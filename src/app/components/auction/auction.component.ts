import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { ContactService } from '../../services/contact.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

Swiper.use([Navigation, Pagination, Autoplay]);

interface Auction {
  image: string;
  titleAr: string;
  titleEn: string;
  contentAr: string;
  contentEn: string;
  status: 'current' | 'upcoming' | 'ended';
}

import { ContactService } from '../../services/contact.service';
import { AuctionService } from '../../services/auction.service/auction.service';

Swiper.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PackagesComponent implements OnInit, AfterViewInit {
  swiper: Swiper | null = null;
  currentLang: string = 'ar';
  auctions: any[] = [];
  selectedTab: 'all' | 'current' | 'upcoming' | 'ended' = 'all';
  filteredAuctions: any[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private http: HttpClient,
    public contactService: ContactService,
    private auctionService: AuctionService
  ) {}

  ngOnInit(): void {
    const savedLang = localStorage.getItem('lang');
    this.currentLang = savedLang === 'en' ? 'en' : 'ar';
    this.loadAuctions();
  }

  ngAfterViewInit(): void {
    this.initializeSwiper();
  }

  private initializeSwiper(): void {
    setTimeout(() => {
      this.destroySwiper();
      this.createSwiper();
    }, 100);
  }

  private destroySwiper(): void {
    if (this.swiper) {
      this.swiper.destroy(true, true);
    }
  }

  private createSwiper(): void {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
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

  // loadAuctions() {
  //   this.auctionService.getAllAuctions().subscribe({
  //     next: (res) => {
  //       this.auctions = res.map((a) => ({
  //         ...a,
  //         status: this.getAuctionStatus(a.startDate, a.endDate),
  //       }));
  //       this.cdr.detectChanges();
  //     },
  //     error: (err) => console.error('Error fetching auctions', err),
  //   });
  // }
  loadAuctions() {
    this.auctionService.getAllAuctions().subscribe({
      next: (data) => {
        this.auctions = data.map((a: any) => ({
          ...a,
          status: this.getAuctionStatus(a.startDate, a.endDate),
        }));
        this.applyFilter();
      },
      error: (err) => console.error('Error loading auctions', err),
    });
  }

  getAuctionStatus(startDate: string, endDate: string): string {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (now < start) return 'upcoming';
    if (now >= start && now <= end) return 'current';
    return 'ended';
  }

  selectTab(tab: 'all' | 'current' | 'upcoming' | 'ended') {
    this.selectedTab = tab;
    this.applyFilter();
  }

  applyFilter() {
    if (this.selectedTab === 'all') {
      this.filteredAuctions = this.auctions;
    } else {
      this.filteredAuctions = this.auctions.filter(
        (a) => a.status === this.selectedTab
      );
    }
  }

  getRemainingTime(endDate: string): string {
    const now = new Date().getTime();
    const end = new Date(endDate).getTime();
    const diff = end - now;

    if (diff <= 0)
      return this.currentLang === 'ar' ? 'انتهى المزاد' : 'Auction Ended';

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    return `${days}d ${hours}h ${minutes}m`;
  }
}

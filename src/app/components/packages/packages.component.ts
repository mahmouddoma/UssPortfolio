import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit
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

Swiper.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PackagesComponent implements OnInit, AfterViewInit {
 swiper: Swiper | null = null;
  currentLang: string = 'ar';

  constructor(
    private cdr: ChangeDetectorRef,
    private http: HttpClient,
    public contactService: ContactService
  ) {}

  ngOnInit(): void {
    const savedLang = localStorage.getItem('lang');
    this.currentLang = savedLang === 'en' ? 'en' : 'ar';
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
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  }

  auctions = [
    {
      image: 'assets/images/auction1.jpg',
      titleAr: 'مزاد العقارات الفاخرة',
      titleEn: 'Luxury Real Estate Auction',
      contentAr: 'شارك في مزادنا للحصول على أفضل العقارات الفاخرة بأسعار تنافسية.',
      contentEn: 'Join our auction to get the best luxury properties at competitive prices.',
      status: 'current'
    },
    {
      image: 'assets/images/auction2.jpg',
      titleAr: 'مزاد السيارات الكلاسيكية',
      titleEn: 'Classic Cars Auction',
      contentAr: 'فرصة لاقتناء سيارات كلاسيكية نادرة في مزادنا القادم.',
      contentEn: 'A chance to own rare classic cars in our upcoming auction.',
      status: 'upcoming'
    },
    {
      image: 'assets/images/auction3.jpg',
      titleAr: 'مزاد التحف الفنية',
      titleEn: 'Art Collectibles Auction',
      contentAr: 'اكتشف تحفًا فنية فريدة في مزادنا الحصري.',
      contentEn: 'Discover unique art collectibles in our exclusive auction.',
      status: 'ended'
    }
  ];

  selectedTab: 'all' | 'current' | 'upcoming' | 'ended' = 'all';
  get currentAuctions() {
  return this.auctions.filter(a => a.status === 'current');
}

get upcomingAuctions() {
  return this.auctions.filter(a => a.status === 'upcoming');
}

get endedAuctions() {
  return this.auctions.filter(a => a.status === 'ended');
}

  get filteredAuctions() {
    if (this.selectedTab === 'all') return this.auctions;
    return this.auctions.filter(a => a.status === this.selectedTab);
  }

  selectTab(tab: 'all' | 'current' | 'upcoming' | 'ended'): void {
    this.selectedTab = tab;
    this.cdr.detectChanges(); 
    this.initializeSwiper();
  }}
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
import { ContactService } from '../../services/contact.service';

Swiper.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css',
})
export class PackagesComponent implements OnInit, AfterViewInit {
  swiper: Swiper | null = null;
  currentLang: string = 'ar';

  auctions: Array<{
    image: string;
    titleAr: string;
    titleEn: string;
    contentAr: string;
    contentEn: string;
    status: 'current' | 'upcoming' | 'ended';
  }> = [
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

  selectedTab: string = 'all';
  currentAuctions: Array<any> = [];
  upcomingAuctions: Array<any> = [];
  endedAuctions: Array<any> = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private http: HttpClient,
    public contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.currentLang = localStorage.getItem('lang') === 'en' ? 'en' : 'ar';
  }

  ngAfterViewInit(): void {
    this.initializeSwiper();
  }

  initializeSwiper(): void {
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

  selectTab(tab: string): void {
    this.selectedTab = tab;

    if (tab === 'all') {
      this.currentAuctions = this.auctions;
      this.upcomingAuctions = this.auctions;
      this.endedAuctions = this.auctions;
    } else if (tab === 'current') {
      this.currentAuctions = this.auctions.filter(
        (auction) => auction.status === 'current'
      );
    } else if (tab === 'upcoming') {
      this.upcomingAuctions = this.auctions.filter(
        (auction) => auction.status === 'upcoming'
      );
    } else if (tab === 'ended') {
      this.endedAuctions = this.auctions.filter(
        (auction) => auction.status === 'ended'
      );
    }
  }
}

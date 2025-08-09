import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

import { ContactService } from '../../services/contact.service';

interface Service {
  serviceNameAr: string;
  serviceNameEn: string;
  typeAr: string;
  typeEn: string;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
}

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OurServicesComponent {
  currentLang: string = 'ar';

  services = [
    {
      serviceNameAr: 'الوساطة العقارية',
      serviceNameEn: 'Real Estate Brokerage',
      icon: 'assets/icons/brokerage.svg',
    },
    {
      serviceNameAr: 'التسويق العقاري',
      serviceNameEn: 'Real Estate Marketing',
      icon: 'assets/icons/marketing.svg',
    },
    {
      serviceNameAr: 'التطوير العقاري',
      serviceNameEn: 'Real Estate Development',
      icon: 'assets/icons/development.svg',
    },
    {
      serviceNameAr: 'التمليك والتأجير',
      serviceNameEn: 'Ownership & Leasing',
      icon: 'assets/icons/leasing.svg',
    },
    {
      serviceNameAr: 'إدارة الأملاك',
      serviceNameEn: 'Property Management',
      icon: 'assets/icons/management.svg',
    },
    {
      serviceNameAr: 'المزادات العقارية',
      serviceNameEn: 'Real Estate Auctions',
      icon: 'assets/icons/auction.svg',
    },
  ];
  ngAfterViewInit() {
    const swiperEl = document.querySelector('.mySwiper') as any;
    if (swiperEl) {
      Object.assign(swiperEl, {
        spaceBetween: 5,
        loop: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        pagination: { clickable: true },
        navigation: true,
        breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        },
      });
      swiperEl.initialize();
    }
  }
}

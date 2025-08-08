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
<<<<<<< HEAD
      icon: 'assets/icons/brokerage.svg',
=======
      icon: 'https://imageio.forbes.com/specials-images/dam/imageserve/1011612238/960x0.jpg?height=474&width=711&fit=bounds',
>>>>>>> dcb8319 (preview)
    },
    {
      serviceNameAr: 'التسويق العقاري',
      serviceNameEn: 'Real Estate Marketing',
<<<<<<< HEAD
      icon: 'assets/icons/marketing.svg',
=======
      icon: 'https://imageio.forbes.com/specials-images/dam/imageserve/1011612238/960x0.jpg?height=474&width=711&fit=bounds',
>>>>>>> dcb8319 (preview)
    },
    {
      serviceNameAr: 'التطوير العقاري',
      serviceNameEn: 'Real Estate Development',
<<<<<<< HEAD
      icon: 'assets/icons/development.svg',
=======
      icon: 'https://imageio.forbes.com/specials-images/dam/imageserve/1011612238/960x0.jpg?height=474&width=711&fit=bounds',
>>>>>>> dcb8319 (preview)
    },
    {
      serviceNameAr: 'التمليك والتأجير',
      serviceNameEn: 'Ownership & Leasing',
<<<<<<< HEAD
      icon: 'assets/icons/leasing.svg',
=======
      icon: 'https://imageio.forbes.com/specials-images/dam/imageserve/1011612238/960x0.jpg?height=474&width=711&fit=bounds',
>>>>>>> dcb8319 (preview)
    },
    {
      serviceNameAr: 'إدارة الأملاك',
      serviceNameEn: 'Property Management',
<<<<<<< HEAD
      icon: 'assets/icons/management.svg',
=======
      icon: 'https://imageio.forbes.com/specials-images/dam/imageserve/1011612238/960x0.jpg?height=474&width=711&fit=bounds',
>>>>>>> dcb8319 (preview)
    },
    {
      serviceNameAr: 'المزادات العقارية',
      serviceNameEn: 'Real Estate Auctions',
<<<<<<< HEAD
      icon: 'assets/icons/auction.svg',
=======
      icon: 'https://imageio.forbes.com/specials-images/dam/imageserve/1011612238/960x0.jpg?height=474&width=711&fit=bounds',
>>>>>>> dcb8319 (preview)
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

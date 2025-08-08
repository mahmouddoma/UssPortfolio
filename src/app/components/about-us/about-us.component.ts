import {
  Component,
  AfterViewInit,
  OnDestroy,
  OnInit,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren('slide') slideElements!: QueryList<ElementRef>;
  @ViewChildren('dot') dotElements!: QueryList<ElementRef>;

  slides: string[] = [
    'https://pbs.twimg.com/profile_banners/1756713945530822656/1723365269/1500x500',
    'https://alzayatfirm.com/wp-content/uploads/2024/10/%D8%A3%D9%87%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A%D8%A9-%D8%9F.jpg',
    'https://pbs.twimg.com/profile_images/1756714052372357121/jItqW0yk_400x400.jpg',
  ];

  currentSlide = 0;
  private slideSubscription?: Subscription;
  private readonly SLIDE_INTERVAL = 2500;

  sectionTitle = {
    ar: 'شركة أسس الريادة للخدمات العقارية',
    en: 'Osos Al-Riyada Real Estate Services',
  };

  description = {
    ar: `شركة أسس الريادة هي شركة رائدة في مجال الخدمات العقارية بالمملكة العربية السعودية، تسعى إلى تقديم حلول متكاملة ومبتكرة تلبي احتياجات العملاء وتواكب تطورات السوق العقاري الحديث.

نُقدم مجموعة متنوعة من الخدمات تشمل: التسويق العقاري، إدارة الأملاك، الوساطة العقارية، التطوير العقاري، والمزادات، وذلك بأعلى معايير الاحترافية والشفافية.

نؤمن في "أسس الريادة" بأن الثقة والمصداقية هما حجر الأساس لأي علاقة ناجحة، لذا نحرص على بناء شراكات طويلة الأمد مع عملائنا مبنية على الجودة والالتزام والنتائج الملموسة.

رؤيتنا أن نكون الخيار الأول في عالم العقار، ورسالتنا هي تمكين الأفراد والشركات من اتخاذ قرارات عقارية ذكية وآمنة من خلال خبرتنا العميقة وفريقنا المتخصص.`,
    en: `Osos Al-Riyada is a leading real estate services company in the Kingdom of Saudi Arabia, committed to delivering integrated and innovative solutions that meet client needs and align with the modern real estate market.

We provide a wide range of services, including real estate marketing, property management, real estate brokerage, development, and auctions — all delivered with the highest standards of professionalism and transparency.

At Osos Al-Riyada, we believe that trust and credibility are the foundation of successful relationships. That’s why we focus on long-term partnerships built on quality, commitment, and tangible results.

Our vision is to be the first choice in the real estate world, and our mission is to empower individuals and businesses to make smart and secure property decisions through our deep expertise and specialized team.`,
  };

  currentLang: string = 'ar';

  constructor(public contactService: ContactService) {}

  ngOnInit(): void {
    this.startSlideshow();
    const savedLang = localStorage.getItem('lang');
    this.currentLang = savedLang === 'en' ? 'en' : 'ar';
  }

  ngAfterViewInit(): void {
    this.updateSlideClasses();
  }

  ngOnDestroy(): void {
    this.stopSlideshow();
  }

  private startSlideshow(): void {
    this.stopSlideshow();
    this.slideSubscription = interval(this.SLIDE_INTERVAL).subscribe(() => {
      this.moveToNextSlide();
    });
  }

  private stopSlideshow(): void {
    this.slideSubscription?.unsubscribe();
  }

  private moveToNextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.updateSlideClasses();
  }

  setCurrentSlide(index: number): void {
    this.currentSlide = index;
    this.updateSlideClasses();
    this.startSlideshow(); // restart interval on manual click
  }

  private updateSlideClasses(): void {
    this.slideElements?.forEach((slide, i) =>
      slide.nativeElement.classList.toggle('active', i === this.currentSlide)
    );

    this.dotElements?.forEach((dot, i) =>
      dot.nativeElement.classList.toggle('active', i === this.currentSlide)
    );
  }
}

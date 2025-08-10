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
    ar: `شركة أسس الريادة للخدمات العقارية، تقدم حلول مبتكرة في التسويق وإدارة وتطوير العقارات بثقة وجودة.`,
    en: `Osos Al-Riyada Real Estate Services provides innovative solutions in marketing, management,
     and development with trust and quality.

`,
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
    this.startSlideshow();
  }

  private updateSlideClasses(): void {
    this.slideElements?.forEach((slide, i) =>
      slide.nativeElement.classList.toggle('active', i === this.currentSlide)
    );

    this.dotElements?.forEach((dot, i) =>
      dot.nativeElement.classList.toggle('active', i === this.currentSlide)
    );
  }
  scrollToAuctions(): void {
    const auctionsSection = document.querySelector('.auctions-section');
    if (auctionsSection) {
      auctionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css'],
  imports: [CommonModule],
})
export class VisionComponent {
  currentLang: string = 'ar';

  visionSections = [
    {
      titleAr: 'رؤيتنا',
      titleEn: 'Vision',
      textAr: 'رؤيتنا أن نكون الخيار الأول في عالم العقار...',
      textEn:
        'Our vision is to be the first choice in the real estate world...',
      imageUrl:
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    },
    {
      titleAr: 'مهمتنا',
      titleEn: 'Mission',
      textAr: 'مهمتنا هي تقديم خدمات عقارية موثوقة...',
      textEn: 'Our mission is to provide trusted real estate services...',
      imageUrl:
        'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=400&q=80',
    },
  ];

  constructor() {}
  ngOnInit() {
    const savedLang = localStorage.getItem('lang');
    this.currentLang = savedLang === 'en' ? 'en' : 'ar';
  }
  toggleLanguage(): void {
    this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('lang', this.currentLang);
  }
}

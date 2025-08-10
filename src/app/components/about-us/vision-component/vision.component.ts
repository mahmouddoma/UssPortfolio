import { Component } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
=======
>>>>>>> 478ac57f9a800269efa21c957e05fad926f5eabb

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css'],
<<<<<<< HEAD
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
=======
})
export class VisionComponent {
  visionText: string = `رؤيتنا أن نكون الخيار الأول في عالم العقار، من خلال تقديم خدمات مبتكرة وموثوقة تلبي احتياجات العملاء وتواكب تطورات السوق العقاري الحديث. نطمح إلى الريادة في الجودة والاحترافية، وبناء علاقات طويلة الأمد مع عملائنا.`;
  visionEn: string = `Our vision is to be the first choice in the real estate world, by providing innovative and reliable services that meet client needs and keep pace with the modern real estate market. We aspire to lead in quality and professionalism, building long-term relationships with our clients.`;
>>>>>>> 478ac57f9a800269efa21c957e05fad926f5eabb
}

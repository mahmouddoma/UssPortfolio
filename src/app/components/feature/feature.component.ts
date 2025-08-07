import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { CounterComponent } from '../counter/counter.component';
import { ContactService } from '../../services/contact.service';

=======
import { CounterComponent } from "../counter/counter.component";
import { ContactService } from '../../services/contact.service';
 
>>>>>>> 598c0d471af26a8c74291e17bd0d879dc229dcb2
interface FeatureIcon {
  type: 'svg' | 'img';
  content: string;
  style?: { [key: string]: string };
}

interface Feature {
  id: number;
  // title: string;/
  titleAr?: string;
  titleEn?: string;
  subtitleAr?: string;
  subtitleEn?: string;
  descriptionAr?: string;
  descriptionEn?: string;
  // description: string;
  icon: FeatureIcon;
<<<<<<< HEAD
  // subtitle?: string;
=======
  // subtitle?: string;  
>>>>>>> 598c0d471af26a8c74291e17bd0d879dc229dcb2
}

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CounterComponent, CommonModule],
  templateUrl: './feature.component.html',
<<<<<<< HEAD
  styleUrl: './feature.component.css',
})
export class FeatureComponent {
  constructor(public contactService: ContactService) {}
  currentLang: string = 'ar';

  ngOnInit(): void {
    const savedLang = localStorage.getItem('lang');
    this.currentLang = savedLang === 'en' ? 'en' : 'ar';
  }
  features: Feature[] = [
    {
      id: 1,
      titleAr: 'سهولة البحث عن العقارات',
      titleEn: 'Easy Property Search',
      subtitleAr: 'سهولة البحث عن العقارات',
      subtitleEn: 'Easy Property Search',
      descriptionAr:
        'منصة متكاملة تتيح لك البحث عن العقارات بسهولة حسب الموقع والسعر والنوع، مع واجهة استخدام سلسة وسريعة.',
      descriptionEn:
        'An integrated platform that allows you to search for properties easily by location, price, and type, with a smooth and fast user interface.',
      icon: {
        type: 'img',
        content:
          'https://pbs.twimg.com/media/GxrmAr8WgAA-cIp?format=jpg&name=large',
      },
    },
    {
      id: 2,
      titleAr: 'تقييم العقارات بدقة',
      titleEn: 'Accurate Property Evaluation',
      subtitleAr: 'تقييم العقارات بدقة',
      subtitleEn: 'Accurate Property Evaluation',
      descriptionAr:
        'نقدم خدمات تقييم احترافية للعقارات لضمان اتخاذ قرارات استثمارية سليمة وشفافة.',
      descriptionEn:
        'We provide professional property evaluation services to ensure sound and transparent investment decisions.',
      icon: {
        type: 'img',
        content:
          'https://pbs.twimg.com/media/GwkBRWHXcAAfB-4?format=jpg&name=900x900',
      },
    },
    {
      id: 3,
      titleAr: 'دعم واستشارات عقارية',
      titleEn: 'Real Estate Support & Consulting',
      subtitleAr: 'دعم واستشارات عقارية',
      subtitleEn: 'Real Estate Support & Consulting',
      descriptionAr:
        'فريق متخصص يقدم لك الدعم والاستشارات في جميع مراحل شراء أو بيع العقار، لضمان تجربة آمنة وناجحة.',
      descriptionEn:
        'A specialized team provides you with support and consulting at all stages of buying or selling property, ensuring a safe and successful experience.',
      icon: {
        type: 'img',
        content:
          'https://pbs.twimg.com/media/GweoaxDWAAA0XQo?format=jpg&name=4096x4096',
      },
    },
    {
      id: 4,
      titleAr: 'مزادات عقارية شفافة',
      titleEn: 'Transparent Real Estate Auctions',
      subtitleAr: 'مزادات عقارية شفافة',
      subtitleEn: 'Transparent Real Estate Auctions',
      descriptionAr:
        'نقدم مزادات عقارية إلكترونية تتيح لك المنافسة على أفضل العقارات بكل شفافية وسهولة، مع ضمان حقوق جميع المشاركين ووضوح الإجراءات.',
      descriptionEn:
        'We offer online real estate auctions that allow you to compete for the best properties with full transparency and ease, ensuring the rights of all participants and clear procedures.',
      icon: {
        type: 'img',
        content:
          'https://pbs.twimg.com/media/GwkBRWHXcAAfB-4?format=jpg&name=large',
        style: {
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(17, 60, 124, 0.15)',
        },
      },
    },
  ];

  section = {
    titleAr: 'مميزات خدماتنا العقارية',
    titleEn: 'Our Real Estate Service Features',
  };
=======
  styleUrl: './feature.component.css'
})
export class FeatureComponent {
   constructor(public contactService: ContactService) {
    }
    currentLang: string = 'ar';
  
    ngOnInit(): void {
      const savedLang = localStorage.getItem('lang');
      this.currentLang = savedLang === 'en' ? 'en' : 'ar';
    }
features: Feature[] = [
  {
    id: 1,
    titleAr: 'تقارير الطلاب ومتابعتهم 📄',
    titleEn: '📄 Student Reports & Follow-Up',
    subtitleAr: 'تقارير الطلاب ومتابعتهم 📄',
    subtitleEn: '📄 Student Reports & Follow-Up',
    descriptionAr: 'يوفر نظام أجيال القرآن تقارير دقيقة وشاملة عن أداء الطلاب، تشمل التحصيل العلمي، الحضور، والمشاركة في الأنشطة، مما يساعد المعلمين والإدارة على تقديم الدعم المناسب لكل طالب وفق احتياجاته.',
    descriptionEn: 'Ajyal Al-Quran provides detailed student performance reports including academic progress, attendance, and activity participation—helping teachers and administrators support each student according to their needs.',
    icon: {
      type: 'img',
      content: `https://ajyalalquran.somee.com/assets/images/1.jpg`
    }
  },
  {
    id: 2,
    titleAr: 'المشرفون على التحفيظ والتدريس 👨‍🏫',
    titleEn: '👨‍🏫 Supervisors of Teaching & Memorization',
    subtitleAr: 'المشرفون على التحفيظ والتدريس 👨‍🏫',
    subtitleEn: '👨‍🏫 Teaching Supervisors',
    descriptionAr: `يشرف على تدريس القرآن الكريم نخبة من المشرفين المتخصصين، يتابعون الطلاب بدقة ويقيّمون الأداء، ويهتمون بغرس القيم القرآنية، وحل المشكلات التربوية.`,
    descriptionEn: `A team of qualified supervisors monitors student progress, ensures teaching quality, reinforces Quranic values, and addresses educational challenges to maintain a productive learning environment.`,
    icon: {
      type: 'img',
      content: 'https://i.pinimg.com/736x/c3/1e/c0/c31ec00f14f34b803f6d0fc15fcc6fd9.jpg',
    }
  },
  {
    id: 3,
    titleAr: '🔹 الحلقات في مدرسة أجيال القرآن',
    titleEn: '🔹 Classes at Ajyal Al-Quran',
    subtitleAr: '🔹 الحلقات في مدرسة أجيال القرآن',
    subtitleEn: '🔹 Structured Quran Learning Classes',
    descriptionAr: `نظام الحلقات الفردية يتيح لكل طالب متابعة خاصة وفق مستواه. الحلقات مقسمة لأقسام: الرجال، النساء، الأطفال، لتناسب الخصوصية والفئات العمرية المختلفة.`,
    descriptionEn: `Individualized class system ensures personalized follow-up. Classes are divided by group: Men, Women, and Children—with age-appropriate teaching environments.`,
    icon: {
      type: 'img',
      content: `https://ajyalalquran.somee.com/assets/images/2.jpg`
    }
  },
  {
    id: 4,
    titleAr: 'المعلمون في أجيال القرآن 👩‍🏫',
    titleEn: '👩‍🏫 Teachers at Ajyal Al-Quran',
    subtitleAr: 'المعلمون في أجيال القرآن 👩‍🏫',
    subtitleEn: '👩‍🏫 Our Teachers',
    descriptionAr: `نخبة من المعلمين والمعلمات المتخصصين، يجمعون بين الكفاءة العلمية والخبرة التربوية، ويركزون على غرس القيم القرآنية وتشجيع الطالب على الاستمرار.`,
    descriptionEn: `A team of highly qualified male and female teachers combines academic skill with educational experience, instilling Quranic values and supporting students' continued growth.`,
    icon: {
      type: 'img',
      content: 'https://ajyalalquran.somee.com/assets/images/3.jpg',
      style: {
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
      }
    }
  }
];

section = {
  titleAr: 'مميزات مدرسة أجيال القرآن',
  titleEn: 'Features of Ajyal Al-Quran School'
};

>>>>>>> 598c0d471af26a8c74291e17bd0d879dc229dcb2

  isValidSvg(content: string): boolean {
    return content.includes('<svg') && content.includes('</svg>');
  }

  getAnimationClass(index: number): string {
    const classes = ['slide-bottom', 'slide-left', 'slide-right', 'fade-in'];
    return classes[index % classes.length];
  }
}

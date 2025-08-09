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
<<<<<<< HEAD
import { ContactService } from '../../services/contact.service';import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

Swiper.use([Navigation, Pagination, Autoplay]);

interface Auction {
  image: string;
  titleAr: string;
  titleEn: string;
  contentAr: string;
  contentEn: string;
  status: 'current' | 'upcoming' | 'ended';
}

=======
import { ContactService } from '../../services/contact.service';

Swiper.use([Navigation, Pagination, Autoplay]);

>>>>>>> 9b5754279316b25c03fd5556e8e910a1d2b02873
@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PackagesComponent implements OnInit, AfterViewInit {
<<<<<<< HEAD
=======
  packages = [
  {
    titleAr: '✨ قسم الحفظ المُيسَّر في أجيال القرآن ✨',
    titleEn: '✨ Easy Memorization Section at Ajyal Al-Quran ✨',
    contentAr: `🔸 التعريف:
قسم الحفظ المُيسَّر هو أحد أكثر الأقسام انتشارًا في أجيال القرآن، لكونه الأنسب لأغلب الطلاب، سواءً من أصحاب المستوى المتوسط أو الطلاب المنشغلين، ويُعنى بحفظ القرآن الكريم بطريقة مريحة ومتدرجة، مع العناية بالتجويد وفهم المعاني المجملة وغريب القرآن.
🔹 الفئة المستهدفة:
الطالب العادي متوسط المستوى.
الطالب المنشغل الذي لا يستطيع الالتحاق ببرامج الحفظ المكثفة.
🎯 أهداف قسم الحفظ المُيسَّر:
ترغيب الطلاب في حفظ القرآن الكريم دون مشقة أو ضغط.
بناء علاقة حب وطمأنينة مع كلام الله تعالى.
تأسيس قاعدة متينة في الحفظ المستمر والمتقن.
تحسين النطق والتجويد ومخارج الحروف.
فهم غريب القرآن والمعاني العامة للآيات.
تثبيت المحفوظ عبر مراجعات منتظمة ومدروسة.
🧩 تقسيمة الحلقة في قسم الحفظ المُيسَّر:
⏱ مدة الحلقة:
من 20 إلى 60 دقيقة، بحسب الباقة التعليمية التي التحق بها الطالب.
ماسية   ذهبية    فضية   برونزية
📌 الأوراد داخل الحلقة:
تنقسم الحصة إلى أربعة أوراد رئيسية:
الجديد – الماضي القريب – الماضي البعيد – الماضي الأبعد.
🧪 اختبارات دورية:
تُجرى اختبارات تقويمية دورية للاطمئنان على جودة الحفظ.`,
    
    contentEn: `🔸 Definition:
The Easy Memorization Section is one of the most popular at Ajyal Al-Quran. It suits most students—especially those at intermediate levels or with busy schedules—and focuses on gradual memorization with Tajweed and basic meaning comprehension.
🔹 Target Audience:
Intermediate-level students.
Busy students who cannot commit to intensive programs.
🎯 Objectives:
Encourage memorization without stress.
Build a loving connection with the Quran.
Establish solid, consistent memorization habits.
Improve pronunciation and Tajweed.
Understand uncommon Quranic terms and general meanings.
Ensure retention through scheduled reviews.
🧩 Structure:
⏱ Duration: 20–60 minutes, depending on the chosen package (Diamond – Gold – Silver – Bronze).
📌 Four core components:
New memorization, Recent review, Older review, Long-term retention.
🧪 Regular assessments:
Periodic evaluations to monitor memorization quality.`
  },

  {
    titleAr: '🎙 قسم الترديد 🎙',
    titleEn: '🎙 Repetition Section 🎙',
    contentAr: `🔸 التعريف:
قسم الترديد يعتمد على أسلوب التلقين والتكرار، حيث يُردّد الطالب الآيات خلف المعلم عدة مرات لترسيخ الحفظ عبر الذاكرة السمعية، مع تصحيح مخارج الحروف.
🔹 الفئة المستهدفة:
الأطفال، كبار السن، المبتدئون، من يعانون من صعوبة القراءة.
🎯 الأهداف:
تسهيل الحفظ بالسماع والتكرار.
تصحيح النطق وتحسين الأداء الصوتي.
غرس الثقة في تلاوة القرآن.
🧩 التقسيم:
⏱ المدة: 20–60 دقيقة.
📌 الأنشطة:
تكرار الآيات خلف المعلم، ربط الجديد بالقديم، واجب صوتي منزلي.
🎧 وسائل مساعدة:
تسجيلات صوتية، بطاقات تلوين، سبورة ذكية.`,
    
    contentEn: `🔸 Definition:
The Repetition Section uses auditory memory through listening and repeating verses after the teacher multiple times, with correction of pronunciation.
🔹 Target Audience:
Children, seniors, beginners, and those with reading difficulties.
🎯 Objectives:
Facilitate memorization via repetition.
Correct articulation and pronunciation.
Instill confidence in recitation.
🧩 Structure:
⏱ Duration: 20–60 minutes.
📌 Activities:
Repeat verses, connect new verses to previous ones, home audio task.
🎧 Tools:
Audio recordings, coloring cards, smart board.`
  },

  {
    titleAr: '🧱 قسم التأسيس في أجيال القرآن 🧱',
    titleEn: '🧱 Foundation Section at Ajyal Al-Quran 🧱',
    contentAr: `🔸 التعريف:
قسم تأسيسي يهدف إلى تعليم الحروف ومخارجها وقواعد التهجي، ليتمكن الطالب من القراءة الصحيحة من المصحف.
🔹 الفئة المستهدفة:
الأطفال من 4 سنوات فأكثر، المبتدئون، من لديهم ضعف في القراءة.
🎯 الأهداف:
تمكين الطالب من قراءة القرآن قراءة صحيحة.
تعليم المخارج والصفات.
تهيئة الطالب للحفظ أو التلاوة.
🧩 الهيكل:
⏱ المدة: 30–60 دقيقة.
📌 المحتوى:
الحروف، التهجي، القراءة المتدرجة، تصحيح التلاوة.
🎒 وسائل:
بطاقات، كتب تأسيسية، تطبيقات تفاعلية، فيديوهات مبسطة.`,
    
    contentEn: `🔸 Definition:
A foundational program to teach Arabic letters, pronunciation, Tajweed, and Quranic reading skills.
🔹 Target Audience:
Children 4+, beginners, or those struggling with reading.
🎯 Objectives:
Enable proper Quran reading.
Teach articulation points and letter traits.
Prepare students for memorization or recitation.
🧩 Structure:
⏱ Duration: 30–60 minutes.
📌 Content:
Letters, word decoding, gradual reading, recitation correction.
🎒 Tools:
Cards, starter books (e.g. Noorani Qaida), smart boards, videos.`
  },

  {
    titleAr: '🛡 قسم الحُصون في أجيال القرآن 🛡',
    titleEn: '🛡 Fortresses Section at Ajyal Al-Quran 🛡',
    contentAr: `🔸 التعريف:
قسم مخصص لبناء الحفظ المنظم والمتقن من خلال منهجية "الحصون الخمسة".
🔹 الفئة المستهدفة:
الطلاب الجادّون، المقبلون على اختبار أو ختمة، المعلمون.
🎯 الأهداف:
ترسيخ الحفظ، منع النسيان، خطة مراجعة شاملة.
🧱 الحصون:
حصن الجديد، الماضي القريب، الماضي البعيد، التحضير، القراءة والسماع.
⏱ المدة: 30–100 دقيقة.
📌 المحتوى: تسميع، مراجعة، تحضير، تلاوة.
🎖 أدوات: جدول، اختبار شهري، وسام.`,
    
    contentEn: `🔸 Definition:
A structured memorization section using the "Five Fortresses" method to achieve strong, lasting memorization.
🔹 Target Audience:
Serious students, those approaching exams or khatma, teachers.
🎯 Objectives:
Reinforce memorization, prevent forgetfulness, implement review systems.
🧱 Fortresses:
New memorization, recent review, old review, preparation, reading/listening.
⏱ Duration: 30–100 minutes.
📌 Content: Recitation, review, prep, reading/listening.
🎖 Tools: Schedule, monthly test, recognition badge.`
  },

  {
    titleAr: '🌿 نظام الحفظ والتدبر في أجيال القرآن 🌿',
    titleEn: '🌿 Memorization & Reflection System at Ajyal Al-Quran 🌿',
    contentAr: `🔸 التعريف:
نظام يجمع بين الحفظ والتدبر، من خلال فهم المعاني ومفردات القرآن قبل حفظه.
🔹 الفئة المستهدفة:
من أتم التأسيس ويرغب بالجمع بين الحفظ والعمل.
🎯 الأهداف:
دمج الحفظ بالفهم، غرس القيم القرآنية، سلوك عملي.
🧩 الهيكل:
⏱ المدة: 45–60 دقيقة.
📌 المحتوى:
تهيئة، قراءة وتدبر، حفظ، تسميع، واجب تطبيقي.
🧰 أدوات: دفتر تدبر، خرائط، أنشطة تفاعلية.`,
    
    contentEn: `🔸 Definition:
Combines memorization with reflection through understanding meanings and messages before memorizing.
🔹 Target Audience:
Those who completed the foundation level and want to link memorization with action.
🎯 Objectives:
Merge memorization with understanding.
Instill Quranic values and real-life application.
🧩 Structure:
⏱ Duration: 45–60 minutes.
📌 Content:
Spiritual prep, reading, reflection, memorization, review, homework.
🧰 Tools: Reflection journal, diagrams, interactive activities.`
  },

  {
    titleAr: '📜 قسم الإجازات والقراءات في أجيال القرآن 📜',
    titleEn: '📜 Ijazah & Qira’at Section at Ajyal Al-Quran 📜',
    contentAr: `🔸 التعريف:
قسم متخصص لتأهيل الطلاب لنيل الإجازة بالسند المتصل للنبي ﷺ في حفظ أو تلاوة القرآن.
🔹 الفئة المستهدفة:
الحفاظ، طلاب العلم، المعلّمون.
🎯 الأهداف:
تخريج مجازين متقنين، نشر علم الإقراء، رفع كفاءة المعلمين.
🧩 المراحل:
📝 تقديم – 📚 تحضير – 🎙 العرض الكامل – 📜 الإجازة.
📌 ملاحظات:
الإجازات تمنح وفق ضوابط، وتحفظ إلكترونيًا.`,
    
    contentEn: `🔸 Definition:
A program to prepare students to earn a certified Quranic Ijazah (license) with a connected chain to Prophet Muhammad ﷺ.
🔹 Target Audience:
Hafiz, Quran teachers, knowledge seekers.
🎯 Objectives:
Produce accurate certified reciters, spread Iqra’a methodology, raise teaching standards.
🧩 Stages:
📝 Application – 📚 Preparation – 🎙 Full Recital – 📜 Certification.
📌 Notes:
Ijazahs are granted with proper criteria and digitally archived.`
  }
];

>>>>>>> 9b5754279316b25c03fd5556e8e910a1d2b02873
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

<<<<<<< HEAD
  private initializeSwiper(): void {
    setTimeout(() => {
      this.destroySwiper();
      this.createSwiper();
    }, 100);
  }
=======
  initializeSwiper(): void {
  setTimeout(() => {
    this.destroySwiper();
    this.createSwiper();
  }, 100);
}
>>>>>>> 9b5754279316b25c03fd5556e8e910a1d2b02873

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
<<<<<<< HEAD
  }

  auctions = [
=======
  }

  formatContent(text: string): string {
    const mappings: { [key: string]: string } = {
      '🔸': 'التعريف:',
      '🔹': 'الفئة المستهدفة:',
      '🎯': 'الأهداف:',
      '🧩': 'تقسيمة الحلقة:',
      '📌': 'المحتوى:',
      '⏱': '<strong>⏱ المدة:</strong>',
      '🎧': 'الوسائل المساعدة:',
      '🎒': 'الوسائل التعليمية:',
      '🧰': 'أدوات مساعدة:',
      '📓': 'واجب تطبيقي:',
      '🗣': 'التسميع والمراجعة:',
      '🔊': 'الحفظ:',
      '🧠': 'التدبر:',
      '📖': 'التهيئة:',
      '🎖': 'أدوات التقييم:',
      '🧪': 'الاختبارات:',
      '🧱': 'الحصون:',
      'ماسية': '<strong>الباقات:</strong>',
    };

    return text
      .split('\n')
      .map((line) => {
        for (const [key, value] of Object.entries(mappings)) {
          if (line.startsWith(key)) {
            return line.startsWith('⏱')
              ? `<p class="section-sub">${value} ${line.replace('⏱ ', '')}</p>`
              : `<h4 class="section-heading">${value}</h4>`;
          }
        }
        return `<p>${line}</p>`;
      })
      .join('');
  }

  auctions: Array<{
    image: string;
    titleAr: string;
    titleEn: string;
    contentAr: string;
    contentEn: string;
  }> = [
>>>>>>> 9b5754279316b25c03fd5556e8e910a1d2b02873
    {
      image: 'assets/images/auction1.jpg',
      titleAr: 'مزاد العقارات الفاخرة',
      titleEn: 'Luxury Real Estate Auction',
      contentAr: 'شارك في مزادنا للحصول على أفضل العقارات الفاخرة بأسعار تنافسية.',
<<<<<<< HEAD
      contentEn: 'Join our auction to get the best luxury properties at competitive prices.',
      status: 'current'
=======
      contentEn: 'Join our auction to get the best luxury properties at competitive prices.'
>>>>>>> 9b5754279316b25c03fd5556e8e910a1d2b02873
    },
    {
      image: 'assets/images/auction2.jpg',
      titleAr: 'مزاد السيارات الكلاسيكية',
      titleEn: 'Classic Cars Auction',
      contentAr: 'فرصة لاقتناء سيارات كلاسيكية نادرة في مزادنا القادم.',
<<<<<<< HEAD
      contentEn: 'A chance to own rare classic cars in our upcoming auction.',
      status: 'upcoming'
=======
      contentEn: 'A chance to own rare classic cars in our upcoming auction.'
>>>>>>> 9b5754279316b25c03fd5556e8e910a1d2b02873
    },
    {
      image: 'assets/images/auction3.jpg',
      titleAr: 'مزاد التحف الفنية',
      titleEn: 'Art Collectibles Auction',
      contentAr: 'اكتشف تحفًا فنية فريدة في مزادنا الحصري.',
<<<<<<< HEAD
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
  }
}
=======
      contentEn: 'Discover unique art collectibles in our exclusive auction.'
    }
  ];
   // Added logic to handle tab selection and filter auctions based on their status (current, upcoming, ended).
  selectedTab: string = 'all';

currentAuctions: Array<any> = [];
upcomingAuctions: Array<any> = [];
endedAuctions: Array<any> = [];

selectTab(tab: string): void {
  this.selectedTab = tab;
}
}
>>>>>>> 9b5754279316b25c03fd5556e8e910a1d2b02873

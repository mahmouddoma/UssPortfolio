import { Component } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
=======
>>>>>>> 478ac57f9a800269efa21c957e05fad926f5eabb

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
<<<<<<< HEAD
  imports: [CommonModule],
})
export class TeamComponent {
  currentLang: string = 'ar';

  teamSections = [
    {
      titleAr: 'فريق العمل',
      titleEn: 'Team',
      textAr: `يضم فريق العمل في أسس الريادة نخبة من الخبراء والمتخصصين...`,
      textEn: `The Osos Al-Riyada team consists of elite experts...`,
      imageUrl:
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    },
    {
      titleAr: 'الخبراء',
      titleEn: 'Experts',
      textAr: `يعمل خبراؤنا على تقديم استشارات عقارية متخصصة...`,
      textEn: `Our experts provide specialized real estate consultations...`,
      imageUrl:
        'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=400&q=80',
    },
  ];

  ngOnInit(): void {
    const savedLang = localStorage.getItem('lang');
    this.currentLang = savedLang === 'en' ? 'en' : 'ar';
  }
=======
})
export class TeamComponent {
  teamText: string = `يضم فريق العمل في أسس الريادة نخبة من الخبراء والمتخصصين في مجال العقارات، الذين يمتلكون خبرة واسعة ومعرفة عميقة بالسوق المحلي والدولي. نؤمن بأهمية العمل الجماعي والابتكار، ونسعى دائماً لتقديم أفضل الحلول والخدمات لعملائنا.`;
  teamEn: string = `The Osos Al-Riyada team consists of elite experts and specialists in real estate, with extensive experience and deep knowledge of both local and international markets. We believe in teamwork and innovation, always striving to provide the best solutions and services to our clients.`;
>>>>>>> 478ac57f9a800269efa21c957e05fad926f5eabb
}

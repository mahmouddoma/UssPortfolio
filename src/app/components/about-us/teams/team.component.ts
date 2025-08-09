import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  teamText: string = `يضم فريق العمل في أسس الريادة نخبة من الخبراء والمتخصصين في مجال العقارات، الذين يمتلكون خبرة واسعة ومعرفة عميقة بالسوق المحلي والدولي. نؤمن بأهمية العمل الجماعي والابتكار، ونسعى دائماً لتقديم أفضل الحلول والخدمات لعملائنا.`;
  teamEn: string = `The Osos Al-Riyada team consists of elite experts and specialists in real estate, with extensive experience and deep knowledge of both local and international markets. We believe in teamwork and innovation, always striving to provide the best solutions and services to our clients.`;
}

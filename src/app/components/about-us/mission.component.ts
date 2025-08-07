import { Component } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css'],
})
export class MissionComponent {
  missionText: string = `رسالتنا هي تمكين الأفراد والشركات من اتخاذ قرارات عقارية ذكية وآمنة من خلال خبرتنا العميقة وفريقنا المتخصص. نلتزم بتقديم أعلى معايير الاحترافية والشفافية، ونؤمن أن الثقة والمصداقية هما حجر الأساس لأي علاقة ناجحة. هدفنا هو بناء شراكات طويلة الأمد مع عملائنا، وتحقيق نتائج ملموسة تواكب تطورات السوق العقاري الحديث.`;
  missionEn: string = `Our mission is to empower individuals and businesses to make smart and secure property decisions through our deep expertise and specialized team. We are committed to the highest standards of professionalism and transparency, believing that trust and credibility are the foundation of successful relationships. Our goal is to build long-term partnerships and deliver tangible results that keep pace with the modern real estate market.`;
}

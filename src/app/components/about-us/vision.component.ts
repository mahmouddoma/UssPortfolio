import { Component } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css'],
})
export class VisionComponent {
  visionText: string = `رؤيتنا أن نكون الخيار الأول في عالم العقار، من خلال تقديم خدمات مبتكرة وموثوقة تلبي احتياجات العملاء وتواكب تطورات السوق العقاري الحديث. نطمح إلى الريادة في الجودة والاحترافية، وبناء علاقات طويلة الأمد مع عملائنا.`;
  visionEn: string = `Our vision is to be the first choice in the real estate world, by providing innovative and reliable services that meet client needs and keep pace with the modern real estate market. We aspire to lead in quality and professionalism, building long-term relationships with our clients.`;
}

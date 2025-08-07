import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';

interface Course {
  courseNameAr: string;
  courseNameEn: string;
  studentsCount: number;
  lessons: number;
  hours: number;
  instructorAr: string;
  instructorEn: string;
  instructorsAr: string[];
  instructorsEn: string[];
  image: string;
}

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css',
})
export class OurServicesComponent {
  constructor(public contactService: ContactService) {
  }
  currentLang: string = 'ar';

  ngOnInit(): void {
    const savedLang = localStorage.getItem('lang');
    this.currentLang = savedLang === 'en' ? 'en' : 'ar';
  }

  services: Course[] = [

  ];
}

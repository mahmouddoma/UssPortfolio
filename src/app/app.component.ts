import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
<<<<<<< HEAD
import { Router, RouterOutlet } from '@angular/router';

=======

// Components
>>>>>>> 598c0d471af26a8c74291e17bd0d879dc229dcb2
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeatureComponent } from './components/feature/feature.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { PackagesComponent } from './components/packages/packages.component';
import { AppInViewportDirective } from './directives/app-in-viewport.directive';
import { ContactService } from './services/contact.service';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
=======
>>>>>>> 598c0d471af26a8c74291e17bd0d879dc229dcb2

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // Components
    AboutUsComponent,
    BackToTopComponent,
    ContactComponent,
    FeatureComponent,
    FooterComponent,
    HeaderComponent,
    OurServicesComponent,
    PackagesComponent,
<<<<<<< HEAD
    AppInViewportDirective,
    RouterOutlet,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'أجيال القرآن';
  constructor(public contactService: ContactService, public router: Router) {}

  ngOnInit(): void {
    const savedLang = localStorage.getItem('lang');
    this.contactService.currentLang = savedLang === 'en' ? 'en' : 'ar';
    document.documentElement.dir =
      this.contactService.currentLang === 'ar' ? 'rtl' : 'ltr';
  }

  isHomeOrAbout(): boolean {
    const url = this.router.url.split('?')[0].split('#')[0];
    return url === '/' || url === '/about';
  }
}
=======
    AppInViewportDirective

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'أجيال القرآن';
constructor(public contactService :ContactService) { 
  }
ngOnInit(): void {
  const savedLang = localStorage.getItem('lang');
  this.contactService.currentLang = savedLang === 'en' ? 'en' : 'ar';
  document.documentElement.dir =  this.contactService.currentLang === 'ar' ? 'rtl' : 'ltr';
}
 
}

>>>>>>> 598c0d471af26a8c74291e17bd0d879dc229dcb2

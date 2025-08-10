import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';
<<<<<<< HEAD
type DropdownKey = 'about' | 'services';
=======
>>>>>>> 478ac57f9a800269efa21c957e05fad926f5eabb

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
<<<<<<< HEAD
  currentLang: 'ar' | 'en' = 'ar';
  isScrolled = false;

  dropdowns: Record<DropdownKey, boolean> = {
    about: false,
    services: false,
  };

  aboutLinks = [
    { link: '/vision', labelAr: 'رؤيتنا', labelEn: 'Our Vision' },
    { link: '/mission', labelAr: 'رسالتنا', labelEn: 'Our Mission' },
    { link: '/team', labelAr: 'فريق العمل', labelEn: 'Our Team' },
  ];

  serviceLinks = [
    {
      link: '/development',
      labelAr: 'التطوير العقاري',
      labelEn: 'Development',
    },
    { link: '/brokerage', labelAr: 'الوساطة العقارية', labelEn: 'Brokerage' },
    { link: '/management', labelAr: 'إدارة الأملاك', labelEn: 'Management' },
    { link: '/leasing', labelAr: 'التمليك والتأجير', labelEn: 'Leasing' },
    { link: '/marketing', labelAr: 'التسويق العقاري', labelEn: 'Marketing' },
  ];

  constructor(private router: Router, public contactService: ContactService) {}

  ngOnInit(): void {
    this.currentLang = (localStorage.getItem('lang') as 'ar' | 'en') || 'ar';
    document.documentElement.setAttribute('dir', this.getDirection());
  }

  toggleLanguage() {
    this.contactService.toggleLanguage();
    this.currentLang = this.contactService.currentLang;
    localStorage.setItem('lang', this.currentLang);
    document.documentElement.setAttribute('dir', this.getDirection());
  }

  getDirection(): 'rtl' | 'ltr' {
    return this.currentLang === 'ar' ? 'rtl' : 'ltr';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled =
      (window.scrollY || document.documentElement.scrollTop) > 100;
  }

  toggleDropdown(menu: DropdownKey) {
    for (let key in this.dropdowns) {
      if (key !== menu) this.dropdowns[key as DropdownKey] = false;
    }
    this.dropdowns[menu] = !this.dropdowns[menu];
  }

  navigateAndCloseDropdown(
    path: string,
    dropdown: DropdownKey,
    closeMenu: boolean = false
  ) {
    this.dropdowns[dropdown] = false;

    this.router.navigate([path]);

    if (closeMenu) {
      const navbarToggler = document.querySelector(
        '.navbar-toggler'
      ) as HTMLElement;
      const navbarCollapse = document.getElementById('navbarNav');

      if (navbarCollapse?.classList.contains('show')) {
        navbarToggler?.click();
      }
    }
  }
=======
  constructor(private router: Router, public contactService: ContactService) {}
  currentLang: any;
  toggleLanguage() {
    this.contactService.toggleLanguage();
    this.currentLang = this.contactService.currentLang;
  }
  isScrolled = false;

  dropdowns = {
    services: false,
    about: false,
  };

  ngOnInit(): void {
    // Set default language to Arabic
    // this.contactService.SetLanguage();
    this.currentLang = (localStorage.getItem('lang') as 'ar' | 'en') || 'ar';
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
    const triggerHeight = 100;
    this.isScrolled = scrollY > triggerHeight;
  }

  /**
   * Scroll to a section when clicking a navigation link.
   */
  scrollTo(event: Event) {
    event.preventDefault();
    const targetPath = (event.target as HTMLAnchorElement).getAttribute(
      'routerLink'
    );
    if (targetPath) {
      const targetElementId = targetPath.replace('/', '');
      const targetElement = document.getElementById(targetElementId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.router.navigate([], { fragment: targetElementId });
      }
    }
  }

  toggleDropdown(menu: 'services' | 'about', show: boolean) {
    this.dropdowns[menu] = show;
  }

  navigateAndCloseDropdown(path: string, dropdown: 'services' | 'about') {
    this.router.navigate([path]);
    this.dropdowns[dropdown] = false;
  }
>>>>>>> 478ac57f9a800269efa21c957e05fad926f5eabb
}

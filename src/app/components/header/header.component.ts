import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';
type DropdownKey = 'about' | 'services';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
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
}

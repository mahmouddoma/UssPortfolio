import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
declare var $: any;
@Component({
  selector: 'app-owl',
  imports: [CommonModule],
  templateUrl: './owl.component.html',
  styleUrl: './owl.component.css',
})
export class OwlComponent implements AfterViewInit {
  logos: string[] = [
    'https://i.pinimg.com/1200x/3f/b1/75/3fb1751a84de5e0795093f91bc318fb7.jpg',
    'https://i.pinimg.com/1200x/3f/b1/75/3fb1751a84de5e0795093f91bc318fb7.jpg',
    'https://i.pinimg.com/1200x/3f/b1/75/3fb1751a84de5e0795093f91bc318fb7.jpg',
    'https://i.pinimg.com/1200x/3f/b1/75/3fb1751a84de5e0795093f91bc318fb7.jpg',
    'https://i.pinimg.com/1200x/3f/b1/75/3fb1751a84de5e0795093f91bc318fb7.jpg',
    'https://i.pinimg.com/1200x/3f/b1/75/3fb1751a84de5e0795093f91bc318fb7.jpg',
    'https://i.pinimg.com/1200x/3f/b1/75/3fb1751a84de5e0795093f91bc318fb7.jpg',
    'https://i.pinimg.com/1200x/3f/b1/75/3fb1751a84de5e0795093f91bc318fb7.jpg',
  ];

  ngAfterViewInit(): void {
    $('.logo-carousel').owlCarousel({
      items: 9,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      loop: true,
      dots: false,
      nav: false,
      center: true,
      rtl: document.documentElement.lang === 'ar',
      responsive: {
        0: { items: 1 },
        476: { items: 1 },
        768: { items: 4 },
        992: { items: 6 },
        1200: { items: 9 },
      },
    });
  }
}

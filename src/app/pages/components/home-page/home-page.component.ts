import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {
  A11y,
  Mousewheel,
  Navigation,
  Pagination,
  SwiperOptions,
} from 'swiper';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent {
  contents = [
    {
      id: 1,
      image: `${environment.assestsBasePath}images/vehicle-1.jpg`,
    },
    {
      id: 2,
      image: `${environment.assestsBasePath}images/vehicle-1.jpg`,
    },
    {
      id: 3,
      image: `${environment.assestsBasePath}images/vehicle-1.jpg`,
    },
    {
      id: 4,
      image: `${environment.assestsBasePath}images/vehicle-1.jpg`,
    },
    {
      id: 5,
      image: `${environment.assestsBasePath}images/vehicle-1.jpg`,
    },
    {
      id: 6,
      image: `${environment.assestsBasePath}images/vehicle-2.jpg`,
    },
    {
      id: 7,
      image: `${environment.assestsBasePath}images/vehicle-3.jpg`,
    },
    {
      id: 8,
      image: `${environment.assestsBasePath}images/vehicle-2.jpg`,
    },
    {
      id: 9,
      image: `${environment.assestsBasePath}images/vehicle-3.jpg`,
    },
    {
      id: 10,
      image: `${environment.assestsBasePath}images/vehicle-1.jpg`,
    },
    {
      id: 11,
      image: `${environment.assestsBasePath}images/vehicle-3.jpg`,
    },
    {
      id: 12,
      image: `${environment.assestsBasePath}images/vehicle-4.jpg`,
    },
    {
      id: 13,
      image: `${environment.assestsBasePath}images/vehicle-2.jpg`,
    },
    {
      id: 14,
      image: `${environment.assestsBasePath}images/vehicle-4.jpg`,
    },
    {
      id: 15,
      image: `${environment.assestsBasePath}images/vehicle-4.jpg`,
    },
    {
      id: 16,
      image: `${environment.assestsBasePath}images/vehicle-4.jpg`,
    },
    {
      id: 17,
      image: `${environment.assestsBasePath}images/vehicle-4.jpg`,
    },
    {
      id: 18,
      image: `${environment.assestsBasePath}images/vehicle-4.jpg`,
    },
    {
      id: 19,
      image: `${environment.assestsBasePath}images/vehicle-5.jpg`,
    },
    {
      id: 20,
      image: `${environment.assestsBasePath}images/vehicle-3.jpg`,
    },
    {
      id: 21,
      image: `${environment.assestsBasePath}images/vehicle-3.jpg`,
    },
    {
      id: 22,
      image: `${environment.assestsBasePath}images/vehicle-5.jpg`,
    },
    {
      id: 23,
      image: `${environment.assestsBasePath}images/vehicle-5.jpg`,
    },
    {
      id: 24,
      image: `${environment.assestsBasePath}images/vehicle-5.jpg`,
    },
    {
      id: 25,
      image: `${environment.assestsBasePath}images/vehicle-5.jpg`,
    },
    {
      id: 26,
      image: `${environment.assestsBasePath}images/vehicle-1.jpg`,
    },
    {
      id: 27,
      image: `${environment.assestsBasePath}images/vehicle-4.jpg`,
    },
    {
      id: 28,
      image: `${environment.assestsBasePath}images/vehicle-5.jpg`,
    },
    {
      id: 29,
      image: `${environment.assestsBasePath}images/vehicle-1.jpg`,
    },
    {
      id: 30,
      image: `${environment.assestsBasePath}images/vehicle-1.jpg`,
    },
    {
      id: 31,
      image: `${environment.assestsBasePath}images/vehicle-5.jpg`,
    },
  ];
  vehicleConfig: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Mousewheel],
    autoHeight: true,
    navigation: true,
    pagination: { clickable: true, dynamicBullets: true },
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    speed: 500,
    autoplay: {
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
      delay: 3000,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  };

  featureConfig: SwiperOptions = {
    modules: [Pagination, A11y, Mousewheel],
    autoHeight: false,
    navigation: false,
    pagination: { clickable: true, dynamicBullets: true },
    centeredSlides: true,
    slidesPerView: 2,
    spaceBetween: 20,
    grabCursor: true,
    direction: 'horizontal',
    loop: true,
    autoplay: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      740: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  };

  reviewConfig: SwiperOptions = {
    modules: [Pagination, Navigation, A11y, Mousewheel],
    autoHeight: false,
    navigation: false,
    pagination: { clickable: true, dynamicBullets: false },
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: true,
    direction: 'horizontal',
    loop: true,
    autoplay: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      740: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  };

  constructor(private router: Router) {}

  checkProduct(index: number) {
    this.router.navigate(['pages/product/' + index]);
  }
}

import { Component, ViewEncapsulation } from '@angular/core';
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
    '../../../../assets/images/vehicle-1.jpg',
    '../../../../assets/images/vehicle-1.jpg',
    '../../../../assets/images/vehicle-1.jpg',
    '../../../../assets/images/vehicle-1.jpg',
    '../../../../assets/images/vehicle-1.jpg',
    '../../../../assets/images/vehicles-2.jpg',
    '../../../../assets/images/vehicle-3.jpg',
    '../../../../assets/images/vehicles-2.jpg',
    '../../../../assets/images/vehicle-3.jpg',
    '../../../../assets/images/vehicle-1.jpg',
    '../../../../assets/images/vehicle-3.jpg',
    '../../../../assets/images/vehicle-4.jpg',
    '../../../../assets/images/vehicles-2.jpg',
    '../../../../assets/images/vehicle-4.jpg',
    '../../../../assets/images/vehicle-4.jpg',
    '../../../../assets/images/vehicle-4.jpg',
    '../../../../assets/images/vehicle-4.jpg',
    '../../../../assets/images/vehicle-4.jpg',
    '../../../../assets/images/vehicle-5.jpg',
    '../../../../assets/images/vehicle-3.jpg',
    '../../../../assets/images/vehicle-3.jpg',
    '../../../../assets/images/vehicle-5.jpg',
    '../../../../assets/images/vehicle-5.jpg',
    '../../../../assets/images/vehicle-5.jpg',
    '../../../../assets/images/vehicle-5.jpg',
    '../../../../assets/images/vehicle-1.jpg',
    '../../../../assets/images/vehicle-4.jpg',
    '../../../../assets/images/vehicle-5.jpg',
    '../../../../assets/images/vehicle-1.jpg',
    '../../../../assets/images/vehicle-1.jpg',
    '../../../../assets/images/vehicle-5.jpg',
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
    autoplay: true,
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
}

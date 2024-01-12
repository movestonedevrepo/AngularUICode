import { Component } from '@angular/core';
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
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  vehicleConfig: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Mousewheel],
    autoHeight: false,
    navigation: false,
    pagination: false,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    speed: 500,
    autoplay: {
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
  };
  images = [
    {
      id: 1,
      image: `${environment.assestsBasePath}images/vehicle-1.jpg`,
    },
    {
      id: 2,
      image: `${environment.assestsBasePath}images/vehicle-2.jpg`,
    },
    {
      id: 3,
      image: `${environment.assestsBasePath}images/vehicle-4.jpg`,
    },
    {
      id: 4,
      image: `${environment.assestsBasePath}images/vehicle-5.jpg`,
    },
  ];
  products = [
    {
      id: 1,
      image: `${environment.assestsBasePath}images/vehicle-1.jpg`,
    },
    {
      id: 2,
      image: `${environment.assestsBasePath}images/vehicle-2.jpg`,
    },
    {
      id: 3,
      image: `${environment.assestsBasePath}images/vehicle-4.jpg`,
    },
    {
      id: 4,
      image: `${environment.assestsBasePath}images/vehicle-5.jpg`,
    },
    {
      id: 5,
      image: `${environment.assestsBasePath}images/vehicle-1.jpg`,
    },
    {
      id: 6,
      image: `${environment.assestsBasePath}images/vehicle-2.jpg`,
    },
  ];
  selectedImage = this.images[0].image;

  constructor(private router: Router) {}

  changeSelectedImage(image: string) {
    this.selectedImage = image;
  }

  checkProduct(index: number) {
    this.router.navigate(['pages/product/' + index]);
    document.getElementById('product-view')?.scrollIntoView();
  }
}

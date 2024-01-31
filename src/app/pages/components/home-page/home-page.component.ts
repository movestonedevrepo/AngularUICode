import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  encapsulation: ViewEncapsulation.None,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageComponent implements OnInit {
  contents: any = [];
  testimonials: any = [];

  vehicleConfig: SwiperOptions = {
    autoHeight: false,
    navigation: true,
    pagination: { clickable: true, dynamicBullets: true },
    centeredSlidesBounds: true,
    centeredSlides: true,
    initialSlide: 2,
    slidesPerView: 3,
    spaceBetween: 20,
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    speed: 1000,
    autoplay: {
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
      delay: 1000,
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
  staticConfig: SwiperOptions = {
    autoHeight: false,
    navigation: true,
    pagination: { clickable: true, dynamicBullets: false },
    centeredSlidesBounds: true,
    centeredSlides: true,
    initialSlide: 2,
    slidesPerView: 3,
    spaceBetween: 20,
    direction: 'horizontal',
    loop: false,
    grabCursor: true,
    // speed: 1000,
    autoplay: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1,
      },
    },
  };
  featureConfig: SwiperOptions = {
    autoHeight: false,
    navigation: false,
    pagination: { clickable: true, dynamicBullets: true },
    centeredSlides: true,
    slidesPerView: 3,
    initialSlide: 2,
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
    autoHeight: false,
    navigation: false,
    pagination: { clickable: true, dynamicBullets: false },
    centeredSlides: true,
    slidesPerView: 3,
    initialSlide: 2,
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

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    const headers: any = new HttpHeaders({ mode: 'no-cors' });
    this.http
      .get(`${environment.baseUrl}/getHomeDetails`, headers)
      .subscribe((data: any) => {
        this.contents = Array(10)
          .fill(data.responsePayload.homeDetails.products)
          .flat();
        this.testimonials = data.responsePayload.homeDetails.testimonials;
      });
  }

  getFeatureList(list: any): Array<any> {
    return list.split(',');
  }

  checkProduct(index: number) {
    this.router.navigate(['pages/product/' + index]);
  }
}

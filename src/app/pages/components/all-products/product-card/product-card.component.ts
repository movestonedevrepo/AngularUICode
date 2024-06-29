import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CONSTANTS } from 'src/app/constants/constants';
import { MagnifyService } from 'src/app/shared/services/magnify.service';
import { SwiperDirective } from 'src/app/shared/utilities/swiper.directive';
import { environment } from 'src/environments/environment';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  encapsulation: ViewEncapsulation.None,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductCardComponent {
  @Input() content: any;
  @Output() checkProductEvent = new EventEmitter();
  assetPath = `${environment.assestsBasePath}images/Product Page`;
  productConfig: SwiperOptions = CONSTANTS.productConfig;
  productContents = [
    `${environment.assestsBasePath}images/Header/header-image.jpg`,
    `${environment.assestsBasePath}images/Header/header-image.jpg`,
    `${environment.assestsBasePath}images/Header/header-image.jpg`,
  ];
  currentProductImage: string = this.productContents[0];

  constructor(private magnifyService: MagnifyService) {}

  checkProduct(index: number) {
    this.checkProductEvent.emit(index);
  }

  magnifyCard() {
    console.log(this.currentProductImage);
    this.magnifyService.showMagnify(this.currentProductImage);
  }

  closeMagnifiedView() {
    const magnifiedView = document.getElementById('magnified-view');
    if (magnifiedView) magnifiedView.style.display = 'none';
  }

  onSlideChange(e: any): void {
    this.currentProductImage =
      this.productContents[e?.detail?.[0]?.activeIndex];
  }
}

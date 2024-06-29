import { ViewportScroller } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { GlobalVariable } from 'src/app/shared/utilities/global-veriables';
import { environment } from 'src/environments/environment';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [SharedModule, ProductCardComponent],
  templateUrl: './all-products.component.html',
  encapsulation: ViewEncapsulation.None,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AllProductsComponent implements OnInit {
  contents!: any[];
  pageLength: number = 9;
  currentPage = 0;
  assetPath = `${environment.assestsBasePath}images/Product Page`;
  selectedImage: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    const productDetails = this.activatedRoute.snapshot.data['productDetails'];
    this.contents = productDetails?.products;
    GlobalVariable.selectedPage = 'products';
  }

  checkProduct(productId: any) {
    this.router.navigate(['pages/product/' + productId]);
  }

  setIndex(pageIndex: number) {
    this.currentPage = pageIndex;
    this.viewportScroller.scrollToAnchor('products');
  }

  nextPage() {
    if (this.currentPage < this.getNumberOfPages - 1) {
      this.currentPage = this.currentPage + 1;
      this.viewportScroller.scrollToAnchor('products');
    }
  }

  onClickAnchor(elementId: string) {
    if (this.router.url.includes('/home')) {
      this.viewportScroller.scrollToAnchor(elementId);
    } else {
      this.router.navigate(['pages/home'], {
        queryParams: { target: elementId },
      });
    }
  }

  get getNumberOfPages(): number {
    if (this.contents.length > 0) {
      return Math.ceil(this.contents.length / this.pageLength);
    }
    return 0;
  }

  get getContents(): any[] {
    if (this.getNumberOfPages > 1) {
      return this.contents.slice(
        this.currentPage * this.pageLength,
        this.currentPage * this.pageLength + this.pageLength
      );
    } else {
      return this.contents;
    }
  }
}

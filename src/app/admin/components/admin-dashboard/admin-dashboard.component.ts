import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogData } from 'src/app/models/dialog-data';
import { MatDialogService } from 'src/app/shared/services/mat-dialog.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent implements OnInit {
  contents!: any[];
  pageLength: number = 9;
  currentPage = 0;
  assetPath = `${environment.assestsBasePath}images/Admin-Dashboard`;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private viewportScroller: ViewportScroller,
    private dialogService: MatDialogService
  ) {}

  ngOnInit(): void {
    this.contents =
      this.activatedRoute.snapshot.data['productDetails']?.products;
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

  editProductDetails(productID: string): void {
    this.router.navigate(['admin/edit-product', productID]);
  }

  removeProduct(productID: string): void {
    this.dialogService
      .openDialog({
        data: {
          title: 'Confirmation',
          message: 'Are you sure you want to remove this product ?',
          buttons: ['Cancel', 'Remove'],
        } as DialogData,
      })
      .afterClosed()
      .subscribe((data: string) => {
        // TODO:
        if (data === 'Remove') {
          console.log('Product Removed');

          // this.productService.removeProduct(productID).subscribe((removedProd: any) => {
          //   if (removedProd && !removedProd.hasError) {
          //     console.log(removedProd);
          //   }
          // });
        }
      });
  }

  toggleVisibility(product: any) {
    const newProd = {
      productID: product.productID,
      visible: product.visible === 'Y' ? 'N' : 'Y',
    };

    this.productService.updateProduct(newProd).subscribe((data: any) => {
      if (data && !data.hasError) {
        product.visible = data.responsePayload?.visible;
      }
    });
  }

  changeSelectedColor(product: any, color: any) {
    product.selectedColor = color;
  }

  getImagesByColor(product: any): string {
    if (product.selectedColor) {
      return product.productPictureDetails.find(
        (eachPic: any) => eachPic.productColor === product.selectedColor
      )?.productImageURL;
    } else {
      return product.imageURL;
    }
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
}

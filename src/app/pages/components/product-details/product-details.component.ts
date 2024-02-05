import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CONSTANTS } from 'src/app/constants/constants';
import { ImageDiaplyModel } from 'src/app/models/image-display-model';
import { DiaplayImagesComponent } from 'src/app/shared/components/diaplay-images/diaplay-images.component';
import { MatDialogService } from 'src/app/shared/services/mat-dialog.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  images: any = [
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
  products: any = [
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
  product: any;
  queryForm = new FormGroup({
    queryName: new FormControl('', Validators.required),
    queryEmail: new FormControl('', [Validators.required, Validators.email]),
    queryPhone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{10}$/),
    ]),
    queryMessage: new FormControl('', Validators.required),
  });
  allproductImages: any;
  colors: any = Object.entries(CONSTANTS.colors);
  selectedColor: any = this.colors[0][0];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private dialogService: MatDialogService,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: any) => {
      this.products = Array(3).fill(data.otherProducts).flat();
      this.images = data.productDetails.productPictureDetails.slice(0, 3);
      this.allproductImages = data.productDetails.productPictureDetails;
      this.product = data.productDetails;
      this.selectedImage = this.images[0].productImageURL;
    });
  }

  onQueryRaise(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  showAllImages() {
    this.dialogService.openDialog(
      {
        width: 'auto',
        height: '600px',
        data: { imagesToDisplay: this.allproductImages } as ImageDiaplyModel,
      },
      DiaplayImagesComponent
    );
  }

  changeSelectedColor(color: any) {
    this.selectedColor = color;
  }

  sendQuery() {
    const payload = {
      queryID: uuidv4(),
      queryPhone: this.queryForm.value.queryPhone,
      queryEmail: this.queryForm.value.queryEmail,
      queryMessage:
        `Message from Mr/Ms ${this.queryForm.value.queryName}:  ` +
        this.queryForm.value.queryMessage,
      forProduct: this.product.productId,
    };
    if (this.queryForm.valid) {
      this.http
        .post(`${environment.baseUrl}/createQuery`, payload)
        .subscribe((data: any) => {
          if (!data.hasError) {
            alert('query sent');
          }
        });
    }
  }

  changeSelectedImage(image: string) {
    this.selectedImage = image;
  }

  checkProduct(index: number) {
    this.router.navigate(['pages/product/' + index]);
    document.getElementById('product-view')?.scrollIntoView();
  }
}

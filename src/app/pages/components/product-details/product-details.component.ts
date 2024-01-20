import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit{
  images:any = [
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
  products:any = [
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
  product:any

  constructor(private router: Router,private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data:any) => {

      this.products= data.productDetails.responsePayload.otherProducts;
      this.images=data.productDetails.responsePayload.productDetails.productPictureDetails;
      this.product =data.productDetails.responsePayload.productDetails;
      this.selectedImage = this.images[0].productImageURL;

      
    })
  }

  

  changeSelectedImage(image: string) {
    this.selectedImage = image;
  }

  checkProduct(index: number) {
    this.router.navigate(['pages/product/' + index]);
    document.getElementById('product-view')?.scrollIntoView();
  }
}

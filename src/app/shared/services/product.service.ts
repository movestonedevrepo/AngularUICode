import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONSTANTS } from 'src/app/constants/constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  createProduct(product: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/createProduct`, product);
  }

  updateProduct(product: any): Observable<any> {
    return this.http.patch(`${environment.baseUrl}/updateProduct`, product);
  }

  removeProduct(productID: string): Observable<any> {
    const productToRemove = {
      productID,
      secretKey: CONSTANTS.secretKey,
    };
    return this.http.post(
      `${environment.baseUrl}/deleteProduct`,
      productToRemove
    );
  }

  searchImageByColor(customProduct: any): Observable<any> {
    return this.http.post(
      `${environment.baseUrl}/getImageByColor`,
      customProduct
    );
  }

  uploadImage(product: any, images: File[]): Observable<any> {
    const formData = new FormData();

    formData.append('productID', product.productID);
    formData.append('productHexCode', product.productHexCode);
    images.forEach((eachImage: File) => {
      formData.append('photos', eachImage, eachImage.name);
    });

    // const request = {
    //   productID: product.productID,
    //   productHexCode: product.productHexCode,
    // };

    // images.forEach((eachImage: File) => {
    //   request.files.push({ photos: eachImage });
    // });
    return this.http.post(`${environment.baseUrl}/uploadFiles`, formData);
  }
}

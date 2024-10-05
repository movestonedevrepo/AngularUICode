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

  updateProduct(product: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/products`, {
      productID: product.productID,
      visible: product.visible,
    });
  }

  removeProduct(product: any): Observable<any> {
    const productToRemove = {
      productID: product.productID,
      secretKey: CONSTANTS.secretKey,
    };
    return this.http.post(
      `${environment.baseUrl}/deleteProduct`,
      productToRemove
    );
  }
}

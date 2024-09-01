import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  updateProduct(product: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/products`, {productID: product.productID, visible: product.visible});
  }
}

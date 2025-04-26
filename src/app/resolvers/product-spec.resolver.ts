import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PRODUCT_DETAILS } from '../constants/product-details';

@Injectable({
  providedIn: 'root',
})
class ProductSpecResolver {
  constructor(private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    // return this.http
    //   .post(`${environment.baseUrl}/getProductDetails`, {
    //     productID: route.params['id'],
    //   })
    //   .pipe(map((data: any) => data.responsePayload));

    /**
     * Done For Static Data Fetch
     */
    return of({ productDetails: PRODUCT_DETAILS.find(ele => ele.productID === route.params['id']) });
  }
}

export const productSpecResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot
) => {
  return inject(ProductSpecResolver).resolve(route);
};

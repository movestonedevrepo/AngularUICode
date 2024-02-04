import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
class ProductSpecResolver {
  constructor(private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.http.post(`${environment.baseUrl}/getProductDetails`, {
      productID: route.params['id'],
    });
  }
}

export const productSpecResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot
) => {
  return inject(ProductSpecResolver).resolve(route);
};

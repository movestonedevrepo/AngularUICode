import { HttpClient } from '@angular/common/http';
import { Inject, inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { environment } from 'src/environments/environment';

export const productSpecResolver: ResolveFn<any> = (route, state) => {
  // return true;
  const http= inject(HttpClient);
  return http.post(`${environment.baseUrl}/getProductDetails`,{productID:route.params["id"]})
};

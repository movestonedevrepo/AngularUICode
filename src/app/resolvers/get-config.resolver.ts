import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export const getConfigResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot
): Observable<any> => {
  const http = inject(HttpClient);
  const pageName = route.url[0].path;

  const postBody = {
    pageName,
  };
  return http.post(`${environment.baseUrl}/GetConfig`, postBody);
};

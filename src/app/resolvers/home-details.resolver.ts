import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HOME_DETAILS } from '../constants/home-details';

export const homeDetailsResolver: ResolveFn<any> = (route, state) => {
  const http = inject(HttpClient);
  const headers: any = new HttpHeaders({ mode: 'no-cors' });
  // return http
  //   .get(`${environment.baseUrl}/getHomeDetails`, headers)
  //   .pipe(map((data: any) => data?.responsePayload?.homeDetails));

  /**
   * Done For Static Data Fetch
   */
  return of(HOME_DETAILS?.responsePayload?.homeDetails);
};

import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConfigPayload } from '../models/config-payload';
import { CONFIG_DETAILS } from '../constants/config-details';

export const getConfigResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot
): Observable<any> => {
  const http = inject(HttpClient);
  const pageName = route.url[0].path;
  const specificParamKeys = route.params;

  const postBody: ConfigPayload = {
    pageName,
  };

  // Object.values(specificParamKeys).forEach((eachParam: string) => {
  //   postBody.pageName = eachParam
  //     ? `${postBody.pageName}-${eachParam}`
  //     : postBody.pageName;
  // });

  // return http.post(`${environment.baseUrl}/GetConfig`, postBody);

  /**
   * Done For Static Data Fetch
   */
  return of(CONFIG_DETAILS);
};

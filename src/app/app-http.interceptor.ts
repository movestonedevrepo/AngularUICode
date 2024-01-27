import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { WebService } from './shared/services/web.service';

export const appHttpInterceptor: HttpInterceptorFn = (req, next) => {

  const webService = inject(WebService);
  const authToken = webService.getAuthentication();
  const authReq = req.clone({
    headers: req.headers.set('Content-Type', 'application/json')
    .set('authorization', `Bearer ${authToken}`)
    
});
  return next(req);
};

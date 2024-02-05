import { HttpHandlerFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, map } from 'rxjs';
import { LoaderService } from './shared/services/loader.service';
import { WebService } from './shared/services/web.service';

// @Injectable({
//   providedIn: 'root',
// })
// class HttpRequestInterceptor implements HttpInterceptor {
//   constructor(
//     private webService: WebService,
//     private loaderService: LoaderService
//   ) {}

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     const authToken = this.webService.getAuthentication;
//     const authReq = req.clone({
//       headers: req.headers
//         .set('Content-Type', 'application/json')
//         .set('authorization', `Bearer ${authToken}`),
//     });
//     this.loaderService.setLoading(true, req.url);
//     return next
//       .handle(req)
//       .pipe(
//         catchError((err) => {
//           this.loaderService.setLoading(false, req.url);
//           return err;
//         })
//       )
//       .pipe(
//         map<any, any>((response: HttpEvent<any>) => {
//           if (response instanceof HttpResponse) {
//             this.loaderService.setLoading(false, req.url);
//           }
//           return response;
//         })
//       );
//   }
// }

export function appHttpInterceptor(req: HttpRequest<any>, next: HttpHandlerFn) {
  const webService = inject(WebService);
  const loaderService = inject(LoaderService);
  const authToken = webService.getAuthentication;
  const authReq = req.clone({
    headers: req.headers
      .set('Content-Type', 'application/json')
      .set('authorization', `Bearer ${authToken}`),
  });
  loaderService.setLoading(true, req.url);
  return next(req)
    .pipe(
      catchError((err) => {
        loaderService.setLoading(false, req.url);
        return err;
      })
    )
    .pipe(
      map((evt: any) => {
        if (evt instanceof HttpResponse) {
          loaderService.setLoading(false, req.url);
        }
        return evt;
      })
    );
  // return Inject(HttpRequestInterceptor).intercept(req, next.handle(req));
}

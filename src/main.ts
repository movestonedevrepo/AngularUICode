import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  bootstrapApplication,
  provideProtractorTestingSupport,
} from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  provideRouter,
  withComponentInputBinding,
  withHashLocation,
  withInMemoryScrolling,
} from '@angular/router';
import { appHttpInterceptor } from './app/app-http.interceptor';
import { AppComponent } from './app/app.component';
import { APP_ROUTES_CONFIG } from './app/app.routes';

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([appHttpInterceptor])),
    provideAnimations(),
    provideProtractorTestingSupport(),
    provideRouter(
      APP_ROUTES_CONFIG,
      inMemoryScrollingFeature,
      withHashLocation(),
      withComponentInputBinding()
    ),
  ],
}).catch((err) => console.error(err));

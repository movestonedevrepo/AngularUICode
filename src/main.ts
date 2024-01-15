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
import { AppComponent } from './app/app.component';
import { APP_ROUTES_CONFIG } from './app/app.routes';

// platformBrowserDynamic()
//   .bootstrapModule(AppComponent)
//   .catch((err) => console.error(err));

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

bootstrapApplication(AppComponent, {
  providers: [
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

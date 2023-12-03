import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  provideRouter,
  withHashLocation,
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pages',
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withHashLocation())],
})
export class AppRoutingModule {}

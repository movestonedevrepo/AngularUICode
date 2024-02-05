import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { QueryViewComponent } from './components/query-view/query-view.component';
import { productSpecResolver } from '../resolvers/product-spec.resolver';
import { getQueryResolver } from '../resolvers/get-query.resolver';

export const PAGES_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'queries',
    component: QueryViewComponent,
    resolve:{
      queryData: getQueryResolver
    }
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
    resolve:{
      productDetails: productSpecResolver
    }
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];
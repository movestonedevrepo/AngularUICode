import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { QueryListComponent } from './components/query-view/query-list/query-list.component';
import { QueryViewComponent } from './components/query-view/query-view.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent,
    ProductDetailsComponent,
    QueryListComponent,
    QueryViewComponent,
  ],
  imports: [CommonModule, SharedModule, PagesRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule {}

import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [HomePageComponent, LoginComponent],
  imports: [CommonModule, SharedModule, PagesRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule {}

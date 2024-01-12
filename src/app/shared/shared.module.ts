import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SwiperDirective } from './utilities/swiper.directive';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, SwiperDirective],
  exports: [
    HeaderComponent,
    SwiperDirective,
    FormsModule,
    ReactiveFormsModule,
    FooterComponent,
  ],
})
export class SharedModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SwiperDirective } from './utilities/swiper.directive';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, SwiperDirective],
  exports: [HeaderComponent, SwiperDirective, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}

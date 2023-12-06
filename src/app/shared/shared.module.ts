import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SwiperDirective } from './utilities/swiper.directive';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, SwiperDirective],
  exports: [HeaderComponent, SwiperDirective],
})
export class SharedModule {}

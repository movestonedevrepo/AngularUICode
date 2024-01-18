import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SharedModule } from './shared/shared.module';

register();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'rickshaw-website';
}

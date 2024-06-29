import { Component } from '@angular/core';
import { delay } from 'rxjs';
import { register } from 'swiper/element/bundle';
import { LoaderService } from './shared/services/loader.service';
import { SharedModule } from './shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

register();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'rickshaw-website';
  loading: boolean = false;
  bannerImages!: Array<any>;

  constructor(private loaderService: LoaderService, private http: HttpClient) { 
    this.listenToLoading();
  }

  ngOnInit(): void {
    this.getBannerImages().subscribe((data: any) => {
      if (!data.hasError) {
        this.bannerImages = data.responsePayload;
        console.log(this.bannerImages);
      }
    });
  }

  getBannerImages() {
    const postBody = {
      pageName: 'home',
      sectionName: 'banner'
    }
    return this.http.post(`${environment.baseUrl}/GetConfig`, postBody);
  }

  listenToLoading(): void {
    this.loaderService.loadingSub.pipe(delay(0)).subscribe((loading) => {
      this.loading = loading;
    });
  }
}

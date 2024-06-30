import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { GlobalVariable } from 'src/app/shared/utilities/global-veriables';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent implements OnInit {
  assetPath = `${environment.assestsBasePath}images/About`;
  productAssetPath = `${environment.assestsBasePath}images/Product Page`;

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    GlobalVariable.selectedPage = 'about';
  }

  onClickAnchor(elementId: string) {
    if (this.router.url.includes('/home')) {
      this.viewportScroller.scrollToAnchor(elementId);
    } else {
      this.router.navigate(['pages/home'], {
        queryParams: { target: elementId },
      });
    }
  }
}

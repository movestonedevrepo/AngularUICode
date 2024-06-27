import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  teamMembers = [
    {
      image:
        'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw40.png',
      name: ' Roger Rubin',
      position: 'Lorem ipsum',
      about:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
      image:
        'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw42.png',
      name: ' Roger Rubin',
      position: 'Lorem ipsum',
      about:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
      image:
        'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw41.png',
      name: ' Roger Rubin',
      position: 'Lorem ipsum',
      about:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
      image:
        'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw41.png',
      name: ' Roger Rubin',
      position: 'Lorem ipsum',
      about:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
      image:
        'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw40.png',
      name: ' Roger Rubin',
      position: 'Lorem ipsum',
      about:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
      image:
        'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw42.png',
      name: ' Roger Rubin',
      position: 'Lorem ipsum',
      about:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
  ];
  assetPath = `${environment.assestsBasePath}images/About`;
  productAssetPath = `${environment.assestsBasePath}images/Product Page`;

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

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

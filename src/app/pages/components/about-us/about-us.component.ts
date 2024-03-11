import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

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
}

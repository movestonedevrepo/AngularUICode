import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../../services/web.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isMenuVisible: boolean = false;
  isVerticalScroll: boolean = false;
  isLoginVisible: boolean = false;

  constructor(private router: Router, private webService: WebService) {}

  ngOnInit(): void {
    this.isLoginVisible = false;

    if (window.scrollY > 0) {
      this.isVerticalScroll = true;
    } else {
      this.isVerticalScroll = false;
    }

    window.onscroll = () => {
      if (window.scrollY > 0) {
        this.isVerticalScroll = true;
      } else {
        this.isVerticalScroll = false;
      }
    };
  }

  onMenuBtnClick() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  selectNavOptions() {
    this.isMenuVisible = false;
  }

  onLoginBtnClick() {
    this.isLoginVisible = !this.isLoginVisible;
    if (this.isLoginVisible) {
      this.router.navigate(['pages/login']);
    }
  }

  get getUserName(): string {
    return this.webService.getUserName();
  }
}

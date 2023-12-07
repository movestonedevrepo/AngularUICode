import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebService {
  constructor() {}

  getUserName(): string {
    return sessionStorage.getItem('userName') || '';
  }

  setUserName(name: any): void {
    sessionStorage.setItem('userName', name);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebService {
  constructor() {}

  get getUserName(): string {
    return sessionStorage.getItem('userName') || '';
  }

  setAuthentication(token: string): void {
    sessionStorage.setItem('authToken', token);
  }

  get getAuthentication(): string {
    return sessionStorage.getItem('authToken') || '';
  }

  setUserName(name: any): void {
    sessionStorage.setItem('userName', name);
  }

  get isUserAuthenticated(): boolean {
    const authToken = this.getAuthentication;
    return authToken !== '';
  }

  removeAuthentication(): void {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userName');
  }
}

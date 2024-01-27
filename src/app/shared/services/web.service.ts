import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebService {
  constructor() {}

  getUserName(): string {
    return sessionStorage.getItem('userName') || '';
  }

  setAuthentication(token:string):void{
    sessionStorage.setItem('authToken',token);

  }

  getAuthentication():string{
   return sessionStorage.getItem('authToken') || '';
  }
  setUserName(name: any): void {
    sessionStorage.setItem('userName', name);
  }
}

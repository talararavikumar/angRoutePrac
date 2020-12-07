import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  cnt = 0;

  constructor() {
    this.cnt++;
    console.log(`constructor ${this.cnt}`);
  }

  public getCnt() {
    return this.cnt;
  }
}

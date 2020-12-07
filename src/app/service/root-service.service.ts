import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootServiceService {

  constructor() { }

  getTestData() {
    return { name: 'root', email: 'rootmail' };
  }
}

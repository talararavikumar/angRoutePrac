import { Injectable } from '@angular/core';
import { LazyServicePracRoutingModule } from '../lazy-service-prac-routing.module';

@Injectable({
  providedIn: LazyServicePracRoutingModule
})
export class LazyserviceService {

  constructor() { }

  getTestData() {
    return {
      name: 'lazy'
    };
  }
}

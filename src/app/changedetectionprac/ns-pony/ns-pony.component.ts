import { Component, OnInit, Input } from '@angular/core';
import { PonyModel } from '../pony-model';

@Component({
  selector: 'ns-pony',
  template: `
    <p>{{ check() }}</p>
    <ns-img [src]="getPonyImageUrl()"></ns-img>
  `
})
export class PonyComponent {
  @Input() ponyModel: PonyModel;

  check() {
    console.log('pony component view checked');
  }

  getPonyImageUrl() {
    return `images/pony-${this.ponyModel.color}-running.gif`;
  }
}



import { Component, OnInit, Input } from '@angular/core';
import { PonyModel } from '../pony-model';

@Component({
  selector: 'ns-img',
  template: `
      <p>{{ check() }}</p>
      <img [src]="src">
  `
})
export class ImageComponent {
  @Input() src: string;

  check() {
      console.log('image component view checked');
  }
}



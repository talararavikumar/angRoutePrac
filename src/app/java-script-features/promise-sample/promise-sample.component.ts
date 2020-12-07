import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-sample',
  templateUrl: './promise-sample.component.html',
  styleUrls: ['./promise-sample.component.scss']
})
export class PromiseSampleComponent implements OnInit {

  sObg: Promise<string>;
  cleanedtheroom = 1;
  constructor() { }

  ngOnInit() {
    this.sObg = new Promise((resolve, reject) => {
      console.log('Testing Over Head');
      if (this.cleanedtheroom === 1) {
        resolve('You go to Play, Hurray!');
      } else if (this.cleanedtheroom === 2) {
        reject('You have to go to Laundry,Ahh!');
      }
    });
  }

  testPromise(): void {
    this.sObg.then((str) => {
        console.log(str);
    }).catch((str) => {
      console.log(str);
    }).finally(() => {
      console.log('promise lagged');
    });
  }

}

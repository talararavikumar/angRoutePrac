import { Component, OnInit } from '@angular/core';
import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'lazyload-prac',
  templateUrl: './lazyload-prac.component.html',
  styleUrls: ['./lazyload-prac.component.scss']
})
export class LazyloadPracComponent implements OnInit {

  constructor(public counterService: CounterService) {}

  increaseCounter() {
    this.counterService.counter += 1;
  }

  ngOnInit() {
  }

}

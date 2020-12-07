import { Component, OnInit } from '@angular/core';
import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'eager',
  templateUrl: './eager.component.html',
  styleUrls: ['./eager.component.scss']
})
export class EagerComponent implements OnInit {


  ngOnInit() {
  }

  constructor(public counterService: CounterService) {}

  increaseCounter() {
    this.counterService.counter += 1;
  }

}

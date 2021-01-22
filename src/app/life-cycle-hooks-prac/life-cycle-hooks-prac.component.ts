import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'life-cycle-hooks-prac',
  templateUrl: './life-cycle-hooks-prac.component.html',
  styleUrls: ['./life-cycle-hooks-prac.component.scss']
})
export class LifeCycleHooksPracComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

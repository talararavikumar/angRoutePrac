import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, DoCheck, AfterViewChecked } from '@angular/core';
import { PonyModel } from '../pony-model';

@Component({
  selector: 'ns-race',
  template: `
    <h2>Race</h2>
    <p>{{ check() }}</p>
    <div>{{sInpProp}}</div>
    <div *ngFor="let pony of ponies">
      <ns-pony [ponyModel]="pony"></ns-pony>
    </div>
    <button (click)="changeColor()">Change color</button>,
  `,
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class RaceComponent implements OnInit, DoCheck, AfterViewChecked {

  constructor(private cd: ChangeDetectorRef) {

  }

  @Input() sInpProp: string;

  ponies: Array<PonyModel> = [{ id: 1, color: 'green' }, { id: 2, color: 'orange' }];
  colors: Array<string> = ['green', 'orange', 'blue'];

  ngOnInit(): void {
    //this.cd.detach();
  }
  ngAfterViewChecked(): void {
    this.cd.detach();
  }

  ngDoCheck(): void {

  }


  check() {
    //console.log('race component view checked');
  }

  changeColor() {
    this.sInpProp = 'checked';
    this.cd.detectChanges();
    //this.ponies[0].color = this.randomColor();
  }

  randomColor() {
    return 'test';
  }


}

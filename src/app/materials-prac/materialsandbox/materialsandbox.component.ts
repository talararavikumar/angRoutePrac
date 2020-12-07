import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-materialsandbox',
  templateUrl: './materialsandbox.component.html',
  styleUrls: ['./materialsandbox.component.scss']
})
export class MaterialsandboxComponent implements OnInit {

  tabs = ['First', 'Second', 'Third', 'fourth', 'fifth', 'sixth', 'seventh', 'eigth', 'ninth'];
  bShowAuto = false;

  constructor() { }

  ngOnInit() {
  }

  test() {
    console.log('wroking');
  }

  public efnSelectedSubtabChanged(tabChangeEvent: MatTabChangeEvent): void {
    const nSelectedIndex = tabChangeEvent.index;
    if (nSelectedIndex === 1) {
      this.bShowAuto = true;
    } else {
      this.bShowAuto = false;
    }
  }

}

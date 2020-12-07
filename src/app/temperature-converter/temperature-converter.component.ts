import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.scss']
})
export class TemperatureConverterComponent implements OnInit {

  @ViewChild('form', { static: false }) form: any;

  public F = 50;

  public C = 10;

  constructor() { }

  ngOnInit() {
    this.onCelsiusValueChanged();
  }

  public onCelsiusValueChanged() {
    this.F = (this.C * 9 / 5) + 32;
  }

  public onFareignHeatValuChanged() {
    this.C = (this.F - 32) * (5 / 9);
  }

}

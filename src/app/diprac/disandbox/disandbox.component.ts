import { Component, OnInit } from '@angular/core';
import { Simpleservice, FakeSimpleservice } from '../simpleservice';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'disandbox',
  providers : [{ provide: Simpleservice, useClass: environment.production ? Simpleservice : FakeSimpleservice }],
  template: '<div>{{testData.name}}</div>',
  styleUrls: ['./disandbox.component.scss']
})
export class DISandboxComponent implements OnInit {

  testData: any;
  constructor(private oService: Simpleservice) { }

  ngOnInit() {
    this.testData = this.oService.getSampleData();
  }

}

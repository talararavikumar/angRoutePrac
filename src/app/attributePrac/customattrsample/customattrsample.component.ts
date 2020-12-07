import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customattrsample',
  templateUrl: './customattrsample.component.html',
  styleUrls: ['./customattrsample.component.scss']
})
export class CustomattrsampleComponent implements OnInit {

   @Input() inTest: string;
  constructor() { }


  gh = "hi";
  ngOnInit() {
  }

}

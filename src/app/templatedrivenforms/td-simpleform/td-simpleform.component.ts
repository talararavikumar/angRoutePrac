import { Component, OnInit } from '@angular/core';
import { Usermodel } from '../usermodel';

@Component({
  selector: 'td-simpleform',
  templateUrl: './td-simpleform.component.html',
  styleUrls: ['./td-simpleform.component.scss']
})
export class TdSimpleformComponent implements OnInit {

  userModel: Usermodel = new Usermodel();

  constructor() { }

  ngOnInit() {
    this.userModel.username = 'Pranay';
  }

}

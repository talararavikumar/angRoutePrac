import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line:typedef-whitespace
  constructor(private oAuth: AuthService) { }

  ngOnInit() {
    console.log(this.oAuth.getCnt());
  }

}

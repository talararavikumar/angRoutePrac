import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { RootServiceService } from './service/root-service.service';
import { Title, Meta } from '@angular/platform-browser';
import { LazyserviceService } from './lazy-service-prac/service/lazyservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  bClass1 = true;
  bClass2 = false;
  title = 'angRoutePrac';
  private apiurl = 'http://jsonplaceholder.typicode.com/users';
  root = document.documentElement;
  gh = 'hi';
  sInpProp = 'val';
  bHasOnlySupport = true;
  num = 0;


  checkcd() {

  }

  ngOnInit(): void {
    // setInterval(() => {
    //   console.log('set time triggered');
    //   this.num++;
    //   this.sInpProp = `testing ${this.sInpProp}  ${this.num}`;
    // }, 10000);
  }


  handleThemeUpdate(e: any): void {
    switch (e.target.value) {
      case 'dark':
        this.root.style.setProperty('--bg', 'black');
        this.root.style.setProperty('--bg-text', 'white');
        break;
      case 'calm':
        this.root.style.setProperty('--bg', '#B3E5FC');
        this.root.style.setProperty('--bg-text', '#37474F');
        break;
      case 'light':
        this.root.style.setProperty('--bg', 'white');
        this.root.style.setProperty('--bg-text', 'black');
        break;
    }
  }


  constructor(private http: HttpClient,
    private oAuth: AuthService,
    private oServ: RootServiceService,
    title: Title, meta: Meta) {
    title.setTitle('PonyRacer - Bet on ponies');
    meta.addTag({ name: 'author', content: 'Ninja Squad' });

    console.log(this.oAuth.getCnt());
    this.root.style.setProperty('--bg', '#B3E5FC');
    this.root.style.setProperty('--bg-text', '#37474F');
    console.log(this.oServ.getTestData());
  }
  fnTestUrl(): any {
    return this.http.get(this.apiurl).subscribe(() => {

    });
  }



}

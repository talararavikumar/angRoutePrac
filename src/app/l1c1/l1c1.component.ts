import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-l1c1',
  templateUrl: './l1c1.component.html',
  styleUrls: ['./l1c1.component.scss']
})
export class L1c1Component implements OnInit {

  constructor( private route: Router, private activeRoute: ActivatedRoute, sAuth: AuthService) { }

  ngOnInit() {
  }

  public test(): void {
    this.route.navigate(['l1-l21c1'], {relativeTo: this.activeRoute});
  }

}

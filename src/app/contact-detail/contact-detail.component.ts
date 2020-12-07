import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  contact: any;

  constructor(private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.contactService.getContact(params.get('id')).subscribe(c => {
        console.log(c);
        this.contact = c;
      });
    });

  }

  

}

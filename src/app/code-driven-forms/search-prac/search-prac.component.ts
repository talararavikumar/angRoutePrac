import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, filter } from 'rxjs/operators';
import { UserValidators } from '../user-validators.service';

@Component({
  selector: 'search-prac',
  templateUrl: './search-prac.component.html',
  styleUrls: ['./search-prac.component.scss']
})
export class SearchPracComponent implements OnInit {

  search = new FormControl('');
  searchForm: FormGroup;
  constructor(private fb: FormBuilder , private service: UserValidators) {

  }

  ngOnInit() {
    this.searchForm = this.fb.group(
      { search: this.search }
    );

    this.search.valueChanges.pipe(
      filter(val => val.length > 3),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(value => this.service.getUserName(value))
    ).subscribe(
      val => {
        console.log(`debounced text input value ${val}`);
      });

  }

}

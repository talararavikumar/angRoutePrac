import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserValidators } from '../user-validators.service';

@Component({
  selector: 'async-validator-prac',
  templateUrl: './async-validator-prac.component.html',
  styleUrls: ['./async-validator-prac.component.scss']
})
export class AsyncValidatorPracComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: UserValidators
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      'name': [
        // initial value
        null,
        // sync built-in validators
        Validators.compose(
          [ Validators.required, Validators.minLength(3) ],
        ),
        // custom async validator
        this.service.userValidator()
      ],
    });
  }

  save() {
    console.log('save to db');
  }

}

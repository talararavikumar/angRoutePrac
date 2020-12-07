import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserValidators } from '../user-validators.service';
import { FormGroup, FormControl, FormBuilder, AsyncValidatorFn, AbstractControl, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'cd-simpleform',
  templateUrl: './cd-simpleform.component.html',
  styleUrls: ['./cd-simpleform.component.scss']
})
export class CdSimpleformComponent implements OnInit {

  userForm: FormGroup;
  passwordForm: FormGroup;
  userNameCtr: FormControl;
  passWordCtrl: FormControl;
  birthdateCtrl: FormControl;
  confirmpassWordCtrl: FormControl;
  constructor(private fb: FormBuilder, private userService: UserValidators) { }

  static isOldEnough(control: FormControl): { tooYoung: true } | null {
    const birthDatePlus18 = new Date(control.value);
    birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);
    return birthDatePlus18 < new Date() ? null : { tooYoung: true };
  }

  static passwordMatch(passwordForm: FormGroup): { matchingError: true } | null {
    const password = passwordForm.get('password').value;
    const confirmpassword = passwordForm.get('confirmpassword').value;
    return password === confirmpassword ? null : { matchingError: true };
  }

  isValidNameNotInList(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.userService.searchUser(control.value)
        .pipe(
          map(res => {
            // if username is already taken
            if (res.length) {
              // return error
              return { userNameExists: true };
            }
          })
        );

    };
  }

  passwordMatch(): ValidatorFn {

    return (passwordForm: FormGroup): { matchingError: true } | null => {
      const password = passwordForm.get('password').value;
      const confirmpassword = passwordForm.get('confirmpassword').value;
      return password === confirmpassword ? null : { matchingError: true };
    };
  }

  test: ValidatorFn = (passwordForm: FormGroup): { matchingError: true } | null => {
    const password = passwordForm.get('password').value;
    const confirmpassword = passwordForm.get('confirmpassword').value;
    return password === confirmpassword ? null : { matchingError: true };
  }

  test2: AsyncValidatorFn = (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
    return this.userService.searchUser(control.value)
      .pipe(
        map(res => {
          // if username is already taken
          if (res.length) {
            // return error
            return { userNameExists: true };
          }
        })
      );
  }


  ngOnInit() {
    this.userNameCtr = this.fb.control('Pranay', [Validators.required, Validators.minLength(2)], this.test2);
    this.passWordCtrl = this.fb.control('', Validators.required);
    this.confirmpassWordCtrl = this.fb.control('', Validators.required);

    this.passwordForm = this.fb.group({
      password: this.passWordCtrl,
      confirmpassword: this.confirmpassWordCtrl
    }, { validators: [this.test] });
    this.birthdateCtrl = this.fb.control('', [Validators.required, CdSimpleformComponent.isOldEnough]);
    this.userForm = this.fb.group({
      username: this.userNameCtr,
      passwordForm: this.passwordForm,
      birthdate: this.birthdateCtrl
    });
  }
}

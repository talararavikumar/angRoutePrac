import { Component, OnInit } from '@angular/core';
import { FormControl, AsyncValidatorFn, ValidatorFn, Validators } from '@angular/forms';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'reg-ex-prac',
  templateUrl: './reg-ex-prac.component.html',
  styleUrls: ['./reg-ex-prac.component.scss']
})
export class RegExPracComponent implements OnInit {


  regex: FormControl = new FormControl('');
  result: FormControl = new FormControl('');
  inputBox: FormControl = new FormControl('');
  test: ValidatorFn = (inputCntrl: FormControl): { matchingError: true } | null => {
    const password = inputCntrl.value;
    return null;
    //return password === confirmpassword ? null : { matchingError: true };
  }
  constructor() { }

  ngOnInit() {
    this.inputBox.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      map((sInput: string) => {
      console.log(sInput);
      if (sInput && sInput.length > 0) {
        sInput = sInput.replace(/^[ /t]+|[ /t]+$/g, '') ;
        //sInput = sInput.trimLeft().trimRight();
        const modified = sInput.replace(/[^a-zA-Z0-9]+/g, '');
        return modified ? modified : sInput;
      }
    })).subscribe((value) => {
      this.inputBox.setValue(value);
    }
    );
  }

}

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[directivebasic]'
})
export class DirectivebasicDirective {

  constructor(private elemRef: ElementRef) {
    this.elemRef.nativeElement.style.backGroundColor = 'red';
  }

}

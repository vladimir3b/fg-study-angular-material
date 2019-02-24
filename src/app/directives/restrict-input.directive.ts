import {
  Directive,
  ElementRef,
  Input
} from '@angular/core';
import * as Inputmask from 'inputmask';


@Directive({
  selector: '[fgRestrictInput]'
})
export class RestrictInputDirective {

  // PROPERTIES
  private regexMap = {
    integer: '^[-]?[0-9]*$',
    float: '^[-]?([0-9]*[.])?[0-9]+$',
    words: '([A-z]*\\s)*',
    point25: '^\-?[0-9]*(?:\\.25|\\.50|\\.75|)$',
    phone: '^[+]?([0-9]){1,2}([.]?([0-9]{3})){1,}$',
    // email: '/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$'
  };

  @Input('fgRestrictInput')
  public set defineInputType(type: string) {
    Inputmask({regex: this.regexMap[type], placeholder: ''})
      .mask(this._elementRef.nativeElement);
  }

  // CONSTRUCTOR
  constructor(private _elementRef: ElementRef) { }

}

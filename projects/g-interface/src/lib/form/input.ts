import { Directive, ElementRef, OnInit } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
  selector: "input[gi-input], input[giInput]",
  host: {
    class: "gi-input",
  },
})
export class GiInputDirective {
  get valid() {
    return this._control && this._control.valid;
  }

  get touched() {
    return this._control && this._control.touched;
  }

  get dirty() {
    return this._control && this._control.dirty;
  }

  constructor(private _control: NgControl) {
    console.log(<any>_control);
  }
}

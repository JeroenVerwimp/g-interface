import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ContentChild,
  HostBinding,
} from "@angular/core";
import { GiInputDirective } from "./input";
import { LabelComponent } from "./label";

@Component({
  selector: "gi-form-group",
  template: `<ng-content></ng-content>`,
  host: {
    class: "gi-form-group",
  },
})
export class FormGroupComponent implements AfterViewInit {
  @ContentChild(GiInputDirective) private _input: GiInputDirective;
  @ContentChild(LabelComponent) private _label: LabelComponent;

  @HostBinding("class.gi-form-group-invalid")
  get invalid(): boolean {
    return (
      this._input &&
      this._input.touched &&
      this._input.dirty &&
      !this._input.valid
    );
  }

  ngAfterViewInit(): void {}
}

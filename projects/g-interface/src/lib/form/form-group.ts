import { Component, Input, ViewChildren, ViewChild } from "@angular/core";
import { GiInputDirective } from "./input";

@Component({
  selector: "gi-form-group",
  template: `<ng-content></ng-content>`,
  host: {
    class: "gi-form-group",
  },
})
export class FormGroupComponent {
  @Input() invalid: boolean;
  @ViewChild(GiInputDirective) input: GiInputDirective;
}

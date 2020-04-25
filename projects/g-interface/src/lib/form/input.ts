import { Directive } from "@angular/core";

@Directive({
  selector: "[gi-input], [giInput]",
  host: {
    class: "gi-input",
  },
})
export class GiInputDirective {}

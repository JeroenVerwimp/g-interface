import { Component } from "@angular/core";

@Component({
  selector: "gi-navbar",
  template: `<ng-content></ng-content>`,
  host: {
    class: "gi-navbar",
  },
})
export class NavbarComponent {
  constructor() {}
}

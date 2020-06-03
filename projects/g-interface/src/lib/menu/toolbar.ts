import { Component } from "@angular/core";

@Component({
  selector: "gi-toolbar",
  template: "<ng-content></ng-content>",
  host: {
    class: "gi-toolbar",
  },
})
export class GiToolbarComponent {}

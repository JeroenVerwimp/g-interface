import { Component } from "@angular/core";

@Component({
  selector: "gi-blade-header, [gi-blade-header], [giBladeHeader]",
  template: "<ng-content></ng-content>",
  host: {
    class: "gi-blade-header",
  },
})
export class BladeHeaderComponent {
  constructor() {}
}

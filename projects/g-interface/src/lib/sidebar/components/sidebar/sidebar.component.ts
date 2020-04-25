import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "gi-sidebar",
  template: `<ng-content></ng-content>`,
  host: {
    class: "gi-sidebar",
  },
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent {
  constructor() {}
}

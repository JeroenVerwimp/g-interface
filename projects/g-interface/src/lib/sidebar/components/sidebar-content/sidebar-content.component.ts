import { Component } from "@angular/core";

@Component({
  selector: "gi-sidebar-content",
  template: `<ng-content></ng-content>`,
  host: {
    class: "gi-sidebar-content",
  },
})
export class SidebarContentComponent {
  constructor() {}
}

import { Component } from "@angular/core";

@Component({
  selector: "gi-sidebar-container",
  template: `
    <ng-content select="gi-sidebar"></ng-content>
    <ng-content select="gi-sidebar-content"></ng-content>
  `,
  host: {
    class: "gi-sidebar-container",
  },
})
export class SidebarContainerComponent {
  constructor() {}
}

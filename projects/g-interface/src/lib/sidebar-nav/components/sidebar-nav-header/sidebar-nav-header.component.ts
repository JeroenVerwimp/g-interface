import { Component, OnInit } from "@angular/core";

@Component({
  selector: "gi-sidebar-nav-header",
  template: `<ng-content></ng-content>`,
  host: {
    class: "gi-sidebar-nav-header",
  },
})
export class SidebarNavHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

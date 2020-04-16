import { Component, OnInit } from "@angular/core";

@Component({
  selector: "gi-sidebar",
  template: `<ng-content></ng-content>`,
  host: {
    class: "gi-sidebar-content",
  },
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

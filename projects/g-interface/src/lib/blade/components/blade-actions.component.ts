import { Component } from "@angular/core";

@Component({
  selector: "gi-blade-actions, [gi-blade-actions], [giBladeActions]",
  template: "<ng-content></ng-content>",
  host: {
    class: "gi-blade-actions",
  },
})
export class BladeActionsComponent {
  constructor() {}
}

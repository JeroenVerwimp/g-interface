import { Component, ViewEncapsulation, Input } from "@angular/core";

@Component({
  selector: "gi-sidebar-nav",
  exportAs: "giSidebarNav",
  template: `<ng-content></ng-content>`,
  host: {
    class: "gi-sidebar-nav",
    "[class.gi-sidebar-nav-disabled]": "disabled",
  },
  encapsulation: ViewEncapsulation.None,
})
export class SidebarNavComponent {
  private _disabled: boolean;
  public get disabled(): boolean {
    return this._disabled;
  }
  @Input()
  public set disabled(v: boolean) {
    this._disabled = v;
  }
}

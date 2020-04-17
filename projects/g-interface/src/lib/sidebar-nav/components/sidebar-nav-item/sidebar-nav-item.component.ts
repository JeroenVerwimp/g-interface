import {
  Component,
  Input,
  ViewEncapsulation,
  Optional,
  AfterContentInit,
  Directive,
  ElementRef,
} from "@angular/core";
import { SidebarNavComponent } from "../..";

@Component({
  selector: "gi-sidebar-nav-item, a[gi-sidebar-nav-item]",
  exportAs: "giSidebarNavItem",
  templateUrl: "./sidebar-nav-item.component.html",
  host: {
    class: "gi-sidebar-nav-item",
    "[class.gi-sidebar-nav-item-disabled]": "disabled",
  },
  encapsulation: ViewEncapsulation.None,
})
export class SidebarNavItemComponent implements AfterContentInit {
  private _disabled: boolean;
  public get disabled(): boolean {
    return this._disabled || !!(this._navList && this._navList.disabled);
  }
  @Input()
  public set disabled(v: boolean) {
    this._disabled = v;
  }

  private _navList?: SidebarNavComponent;

  constructor(@Optional() navList?: SidebarNavComponent) {
    this._navList = navList;
  }

  ngAfterContentInit(): void {
    console.log(this._navList);
  }
}

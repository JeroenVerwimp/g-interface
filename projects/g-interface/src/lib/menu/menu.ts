import {
  Component,
  Input,
  EventEmitter,
  Output,
  ContentChild,
  Directive,
} from "@angular/core";

// export interface GiMenuItem {
//   label: string;
//   click: () => void;
// }

// export interface GiMenu extends GiMenuItem {
//   items: GiMenuItem[];
// }

@Component({
  selector: "gi-menu-item-content, [gi-menu-item-content], [giMenuItemContent]",
  template: "<ng-content></ng-content>",
  host: {
    class: "gi-menu-item-content",
  },
})
export class GiMenuItemContentComponent {}

@Component({
  selector: "gi-menu",
  template: ` <ng-content></ng-content> `,
  host: {
    class: "gi-menu",
  },
})
export class GiMenuComponent {}

@Component({
  selector: "gi-menu-item",
  template: `
    <span
      gi-menu-item-content
      [ngClass]="{ 'gi-menu-item--sub-menu': hasSubMenu }"
      *ngIf="label"
      (click)="selected.emit()"
      >{{ label }}</span
    >
    <ng-content
      *ngIf="!label"
      select="[gi-menu-item-content], [giMenuItemContent]"
    ></ng-content>
    <ng-content select="gi-menu"></ng-content>
  `,
  host: {
    class: "gi-menu-item",
  },
})
export class GiMenuItemComponent {
  @ContentChild(GiMenuComponent) subContent: GiMenuComponent;
  @ContentChild(GiMenuItemContentComponent)
  labelContent: GiMenuItemContentComponent;

  get hasSubMenu(): boolean {
    return this.subContent != null;
  }

  get hasLabelContent(): boolean {
    return this.labelContent != null;
  }

  @Input() label: string;
  @Output() selected: EventEmitter<any> = new EventEmitter();
}

@Component({
  selector: "gi-menu-spacer",
  template: "<div></div>",
  host: {
    class: "gi-menu-spacer",
  },
})
export class GiMenuSpacer {}

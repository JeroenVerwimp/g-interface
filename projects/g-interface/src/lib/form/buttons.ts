import { Component, Input, HostBinding } from "@angular/core";

@Component({
  selector: "a[gi-button], a[giButton], button[gi-button], button[giButton]",
  template: "<span><ng-content></ng-content></span>",
  inputs: ["disabled"],
  host: {
    "[attr.disabled]": "disabled || null",
    "(click)": "_haltDisabledEvents($event)",
  },
})
export class ButtonComponent {
  @Input() color: string = "primary";
  @Input() look: "default" | "outline" = "default";

  @HostBinding("class") get classList(): string {
    return (
      "gi-button" +
      (this.color ? " gi-button-" + this.color : "") +
      (this.disabled ? " gi-button-disabled" : "") +
      (this.look == "outline" ? " gi-button-outline" : "")
    );
  }
  @Input() tabIndex: number;

  @HostBinding("style.pointer-events") get pEvents(): string {
    if (this.disabled) {
      return "none";
    }
    return "auto";
  }

  private _disabled: boolean;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value != null && `${value}` !== "false";
  }

  _haltDisabledEvents(event: Event) {
    // A disabled button shouldn't apply any actions
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
}

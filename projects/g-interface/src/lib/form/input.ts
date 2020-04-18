import {
  Directive,
  Component,
  Input,
  HostBinding,
  OnInit,
  Output,
} from "@angular/core";

@Directive({
  selector: "[gi-input], [giInput]",
  host: {
    class: "gi-input",
  },
})
export class GiInputDirective {}

@Component({
  selector: "a[gi-button], a[giButton], button[gi-button], button[giButton]",
  template: "<span><ng-content></ng-content></span>",
  inputs: ["disabled"],
  host: {
    "[attr.disabled]": "disabled || null",
    "(click)": "_haltDisabledEvents($event)",
  },
})
export class ButtonComponent implements OnInit {
  @Input() color: string = "primary";
  @HostBinding("class") classList: string = "gi-button ";
  @Input() tabIndex: number;

  @HostBinding("style.pointer-events") get pEvents(): string {
    if (this.disabled) {
      return "none";
    }
    return "auto";
  }

  private _disabled: boolean;

  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(value: any) {
    this._disabled = value != null && `${value}` !== "false";
  }

  ngOnInit(): void {
    if (this.color) {
      this.classList += "gi-button-" + this.color;
      this.classList += this.disabled ? " gi-button-disabled" : "";
    }
  }

  _haltDisabledEvents(event: Event) {
    // A disabled button shouldn't apply any actions
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
}

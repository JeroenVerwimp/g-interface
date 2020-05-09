import { Component } from "@angular/core";

@Component({
  selector: "gi-label, label[gi-label], label[giLabel]",
  template: "<ng-content></ng-content>",
  host: {
    class: "gi-label",
  },
})
export class LabelComponent {}

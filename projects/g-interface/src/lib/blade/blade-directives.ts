import { Directive } from "@angular/core";

@Directive({
  selector: "[giBladeTitle], [gi-blade-title]",
  host: {
    class: "gi-blade-title",
  },
})
export class GiBladeTitleDirective {}

@Directive({
  selector: "[giBladeSub], [gi-blade-sub]",
  host: {
    class: "gi-blade-sub",
  },
})
export class GiBladeSubDirective {}

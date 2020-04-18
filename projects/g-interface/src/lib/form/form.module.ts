import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormGroupComponent } from "./form-group";
import { GiInputDirective, ButtonComponent } from "./input";

@NgModule({
  declarations: [FormGroupComponent, GiInputDirective, ButtonComponent],
  imports: [CommonModule],
  exports: [FormGroupComponent, GiInputDirective, ButtonComponent],
})
export class GiFormModule {}

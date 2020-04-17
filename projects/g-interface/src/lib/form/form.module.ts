import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormGroupComponent } from "./form-group";
import { GiInputDirective } from "./input";

@NgModule({
  declarations: [FormGroupComponent, GiInputDirective],
  imports: [CommonModule],
  exports: [FormGroupComponent, GiInputDirective],
})
export class GiFormModule {}

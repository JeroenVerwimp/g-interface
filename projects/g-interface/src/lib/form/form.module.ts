import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormGroupComponent } from "./form-group";
import { GiInputDirective } from "./input";
import { ButtonComponent } from "./buttons";
import { LabelComponent } from "./label";

@NgModule({
  declarations: [
    FormGroupComponent,
    GiInputDirective,
    ButtonComponent,
    LabelComponent,
  ],
  imports: [CommonModule],
  exports: [
    FormGroupComponent,
    GiInputDirective,
    ButtonComponent,
    LabelComponent,
  ],
})
export class GiFormModule {}

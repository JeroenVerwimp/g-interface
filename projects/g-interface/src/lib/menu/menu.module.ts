import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  GiMenuComponent,
  GiMenuItemComponent,
  GiMenuItemContentComponent,
  GiMenuSpacer,
} from "./menu";
import { GiToolbarComponent } from "./toolbar";

@NgModule({
  declarations: [
    GiMenuComponent,
    GiMenuItemComponent,
    GiToolbarComponent,
    GiMenuItemContentComponent,
    GiMenuSpacer,
  ],
  exports: [
    GiMenuComponent,
    GiMenuItemComponent,
    GiToolbarComponent,
    GiMenuItemContentComponent,
    GiMenuSpacer,
  ],
  imports: [CommonModule],
})
export class GiMenuModule {}

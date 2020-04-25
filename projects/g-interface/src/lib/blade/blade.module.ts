import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BladeContainerComponent } from "./components/blade-container.component";
import { BladeStackComponent } from "./components/blade-stack.component";
import { BladeContentComponent } from "./components/blade-content.component";
import { GiBladeTitleDirective, GiBladeSubDirective } from "./blade-directives";
import { BladeHeaderComponent } from "./components/blade-header.component";
import { BladeActionsComponent } from "./components/blade-actions.component";

@NgModule({
  declarations: [
    BladeContainerComponent,
    BladeStackComponent,
    BladeContentComponent,
    BladeHeaderComponent,
    BladeActionsComponent,

    GiBladeTitleDirective,
    GiBladeSubDirective,
  ],
  imports: [CommonModule],
  exports: [
    BladeContainerComponent,
    BladeContentComponent,
    BladeHeaderComponent,
    BladeActionsComponent,

    GiBladeTitleDirective,
    GiBladeSubDirective,
  ],
})
export class GiBladeModule {}

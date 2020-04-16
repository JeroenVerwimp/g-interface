import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SidebarContainerComponent } from "./components/sidebar-container/sidebar-container.component";
import { SidebarContentComponent } from "./components/sidebar-content/sidebar-content.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@NgModule({
  declarations: [
    SidebarContainerComponent,
    SidebarContentComponent,
    SidebarComponent,
  ],
  imports: [CommonModule],
  exports: [
    SidebarContainerComponent,
    SidebarContentComponent,
    SidebarComponent,
  ],
})
export class GiSidebarModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SidebarNavComponent } from "./components/sidebar-nav/sidebar-nav.component";
import { SidebarNavItemComponent } from "./components/sidebar-nav-item/sidebar-nav-item.component";

@NgModule({
  declarations: [SidebarNavComponent, SidebarNavItemComponent],
  imports: [CommonModule],
  exports: [SidebarNavComponent, SidebarNavItemComponent],
})
export class GiSidebarNavModule {}

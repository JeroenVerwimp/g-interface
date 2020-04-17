import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SidebarNavComponent } from "./components/sidebar-nav/sidebar-nav.component";
import { SidebarNavItemComponent } from "./components/sidebar-nav-item/sidebar-nav-item.component";
import { SidebarNavHeaderComponent } from "./components/sidebar-nav-header/sidebar-nav-header.component";

@NgModule({
  declarations: [
    SidebarNavComponent,
    SidebarNavItemComponent,
    SidebarNavHeaderComponent,
  ],
  imports: [CommonModule],
  exports: [
    SidebarNavComponent,
    SidebarNavItemComponent,
    SidebarNavHeaderComponent,
  ],
})
export class GiSidebarNavModule {}

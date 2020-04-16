import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GiSidebarModule, GiSidebarNavModule } from "g-interface";
import { LayoutComponent } from "./components/layout/layout.component";
import { HomeComponent } from "./components/home/home.component";
import { FormComponent } from "./components/form/form.component";

@NgModule({
  declarations: [AppComponent, LayoutComponent, HomeComponent, FormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GiSidebarModule,
    GiSidebarNavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  GiSidebarModule,
  GiSidebarNavModule,
  GiNavbarModule,
  GiFormModule,
  GiBladeModule,
  GiMenuModule,
  GiToastModule
} from 'g-interface';

import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { BladesComponent } from './components/blades/blades.component';
import { ExampleBladeOneComponent } from './components/blades/example-blade-one/example-blade-one.component';
import { ExampleBladeTwoComponent } from './components/blades/example-blade-two/example-blade-two.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    FormComponent,
    BladesComponent,
    ExampleBladeOneComponent,
    ExampleBladeTwoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

    GiSidebarModule,
    GiSidebarNavModule,
    GiNavbarModule,
    GiFormModule,
    GiBladeModule,
    GiMenuModule,
    GiToastModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

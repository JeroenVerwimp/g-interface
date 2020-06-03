import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import {PortalModule} from '@angular/cdk/portal';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  declarations: [ToastComponent],
  imports: [
    CommonModule,
    PortalModule,
    OverlayModule
  ]
})
export class GiToastModule { }

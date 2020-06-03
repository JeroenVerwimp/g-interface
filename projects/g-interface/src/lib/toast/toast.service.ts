import {Injectable, InjectionToken, Injector} from '@angular/core';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import {ToastComponent} from './toast.component';
import {ToastData} from './toast-data';
import {ToastRef} from './toast-ref';

export const TOAST_DATA = new InjectionToken<ToastData>('TOAST_DATA');
export const TOAST_REF = new InjectionToken<ToastRef>('TOAST_REF');

@Injectable({
  providedIn: 'root'
})
export class GiToast {

  private _lastToast: ToastRef;

  constructor(private overlay: Overlay, private parentInjector: Injector) { }

  public showToast(data: ToastData): ToastRef {
    const positionStrategy = this.overlay.position().global().right().top(this.getPosition());
    const overlayRef = this.overlay.create({ positionStrategy });

    const toastRef = new ToastRef(overlayRef);
    const injector = this.getInjector(data, toastRef);
    const toastPortal = new ComponentPortal(ToastComponent, null, injector);

    overlayRef.attach(toastPortal);

    this.lastToast = toastRef;
    return toastRef;
  }

  set lastToast(value: ToastRef) {
    value.afterClosed().subscribe(() => {
      if (this._lastToast === value) {
        this._lastToast = null;
      };
    });

    this._lastToast = value;
  }

  get lastToast(): ToastRef {
    return  this._lastToast;
  }

  private getInjector(data: ToastData, toastRef: ToastRef) {
    const tokens = new WeakMap()
      .set(TOAST_DATA, data)
      .set(TOAST_REF, toastRef);

    return new PortalInjector(this.parentInjector, tokens);
  }

  private getPosition() {
    const position = this.lastToast ? this.lastToast.getPosition().bottom : 0;
    return position + 'px';
  }

}

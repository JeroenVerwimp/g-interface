import {OverlayRef} from '@angular/cdk/overlay';
import {Observable, Subject} from 'rxjs';

export class ToastRef {

  private readonly _afterClosed = new Subject<any>();

  constructor(readonly overlay: OverlayRef) { }

  close() {
    this.overlay.dispose();
    this._afterClosed.next();
    this._afterClosed.complete();
  }

  afterClosed(): Observable<any> {
    return this._afterClosed.asObservable();
  }

  getPosition() {
    return this.overlay.overlayElement.getBoundingClientRect();
  }
}

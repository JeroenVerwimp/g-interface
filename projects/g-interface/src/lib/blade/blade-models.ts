import { Subject, Observable } from "rxjs";
import { Type, ComponentRef } from "@angular/core";
import { BladeContainerComponent } from "./components/blade-container.component";

export class GiBladeRef<T, R = any> {
  private readonly _afterClosed = new Subject<R | undefined>();

  constructor() {}

  afterClosed(): Observable<R | undefined> {
    return this._afterClosed.asObservable();
  }

  close(result?: R): void {
    this._afterClosed.next(result);
    this._afterClosed.complete();
  }
}

export class BladeOptions<D = any> {
  width?: string = null;
  maxWidth?: string = null;
  minWidth?: string = null;
  data?: D | null = null;
}

export class InternalBlade<T, D = any, R = any> {
  _type: Type<T>;
  _options: BladeOptions<D>;
  _ref: GiBladeRef<T, R>;
  _componentRef: ComponentRef<BladeContainerComponent>;

  constructor(type: Type<T>, options?: BladeOptions<D>) {
    this._type = type;
    this._options = options;
    this._ref = new GiBladeRef();
  }

  getMap(): WeakMap<object, any> {
    const map = new WeakMap();
    map.set(BladeOptions, this._options);
    map.set(GiBladeRef, this._ref);
    return map;
  }
}

import {
  Injectable,
  ComponentFactoryResolver,
  Type,
  ApplicationRef,
  ComponentRef,
  Injector,
  EmbeddedViewRef,
} from "@angular/core";
import { BladeStackComponent } from "./components/blade-stack.component";
import { BladeOptions, GiBladeRef } from "./blade-models";

@Injectable({
  providedIn: "root",
})
export class GiBladeStack {
  private _bladeStackReference: ComponentRef<BladeStackComponent>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  public open<T, D = any, R = any>(
    componentType: Type<T>,
    options?: BladeOptions<D>
  ): GiBladeRef<T, R> {
    this._attachBladeStackToBody();

    if (!options) {
      options = new BladeOptions<D>();
    }

    if (!options.width && !options.minWidth && !options.maxWidth) {
      options.minWidth = "350px";
    }

    const ref = this._bladeStackReference.instance.addBlade(
      componentType,
      options
    );

    const sub = ref.afterClosed().subscribe(() => {
      if (this._bladeStackReference.instance._bladeStack.length == 0) {
        this._detachBladeStackFromBody();
        sub.unsubscribe();
      }
    });

    return ref;
  }

  private _attachBladeStackToBody() {
    if (this._bladeStackReference) return;

    const bladeStackFactory = this.resolver.resolveComponentFactory(
      BladeStackComponent
    );
    const bladeStackReference = bladeStackFactory.create(this.injector);
    this.appRef.attachView(bladeStackReference.hostView);

    const domElement = (bladeStackReference.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.append(domElement);

    this._bladeStackReference = bladeStackReference;
  }

  private _detachBladeStackFromBody() {
    if (!this._bladeStackReference) return;

    this.appRef.detachView(this._bladeStackReference.hostView);
    this._bladeStackReference.destroy();
    this._bladeStackReference = null;
  }
}

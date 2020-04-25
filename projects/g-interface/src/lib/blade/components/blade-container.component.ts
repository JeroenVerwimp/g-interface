import {
  Component,
  OnInit,
  Input,
  ComponentFactoryResolver,
  OnDestroy,
  ChangeDetectorRef,
  ViewContainerRef,
  ViewChild,
  AfterViewInit,
  Injector,
  HostBinding,
} from "@angular/core";
import { InternalBlade } from "../blade-models";
import { BladeInjector } from "../blade-injector";

@Component({
  selector: "gi-blade-container",
  template: `<ng-template #content></ng-template>`,
  host: {
    class: "gi-blade-container",
  },
})
export class BladeContainerComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @Input() blade: InternalBlade<any>;
  @Input() index: number;
  @Input() last: boolean;
  @ViewChild("content", { read: ViewContainerRef })
  contentViewContainer: ViewContainerRef;

  @HostBinding("style.z-index") get zIndex(): number {
    return this.index + (this.last ? 1 : 0);
  }

  @HostBinding("style.width") get width(): string | null {
    return this.blade._options.width;
  }

  @HostBinding("style.min-width") get minWidth(): string | null {
    return this.blade._options.minWidth;
  }

  @HostBinding("style.max-width") get maxWidth(): string | null {
    return this.blade._options.maxWidth;
  }

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private changeDetector: ChangeDetectorRef,
    private injector: Injector
  ) {}

  ngOnDestroy(): void {
    if (this.blade._componentRef) {
      this.blade._componentRef.destroy();
    }
  }

  ngAfterViewInit(): void {
    this.loadChildComponent();
    this.changeDetector.detectChanges();
  }

  loadChildComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.blade._type
    );

    this.contentViewContainer.clear();
    this.blade._componentRef = this.contentViewContainer.createComponent(
      componentFactory,
      0,
      new BladeInjector(this.injector, this.blade.getMap())
    );
  }

  ngOnInit(): void {}
}

import { Component, OnInit, Type } from "@angular/core";
import { BladeOptions, GiBladeRef, InternalBlade } from "../blade-models";

@Component({
  selector: "gi-blade-stack",
  template: `
    <div
      class="gi-blade-stack-background"
      [style.z-index]="_bladeStack.length"
    ></div>
    <div class="gi-blade-stack-blades">
      <gi-blade-container
        *ngFor="let blade of _bladeStack; let i = index; let l = last"
        [blade]="blade"
        [index]="1 + i"
        [last]="l"
      ></gi-blade-container>
    </div>
  `,
  host: {
    class: "gi-blade-stack",
  },
})
export class BladeStackComponent implements OnInit {
  _bladeStack: InternalBlade<any>[];

  constructor() {
    this._bladeStack = [];
  }

  ngOnInit(): void {}

  public addBlade<T, D = any, R = any>(
    componentType: Type<T>,
    options?: BladeOptions<D>
  ): GiBladeRef<T, R> {
    const blade = new InternalBlade(componentType, options);

    const sub = blade._ref.afterClosed().subscribe(() => {
      const index = this._bladeStack.indexOf(blade);
      this._bladeStack.splice(index);
      sub.unsubscribe();
    });

    this._bladeStack.push(blade);
    return blade._ref;
  }
}

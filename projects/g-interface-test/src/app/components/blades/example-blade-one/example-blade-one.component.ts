import { Component, OnInit } from "@angular/core";
import { ExampleBladeTwoComponent } from "../example-blade-two/example-blade-two.component";
import { BladeOptions, GiBladeRef, GiBladeStack } from "g-interface";

@Component({
  selector: "gitest-example-blade-one",
  templateUrl: "./example-blade-one.component.html",
  styleUrls: ["./example-blade-one.component.sass"],
})
export class ExampleBladeOneComponent implements OnInit {
  name: string;

  constructor(
    private bladeStack: GiBladeStack,
    private blade: GiBladeRef<ExampleBladeOneComponent>
  ) {}

  ngOnInit(): void {}

  openTwo() {
    this.bladeStack.open(ExampleBladeTwoComponent, {
      data: {
        name: this.name,
      },
    });
  }

  close() {
    this.blade.close("test");
  }
}

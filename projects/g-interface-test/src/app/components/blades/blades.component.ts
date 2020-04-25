import { Component, OnInit } from "@angular/core";
import { GiBladeStack } from "g-interface";
import { ExampleBladeOneComponent } from "./example-blade-one/example-blade-one.component";

@Component({
  selector: "gitest-blades",
  templateUrl: "./blades.component.html",
  styleUrls: ["./blades.component.sass"],
})
export class BladesComponent implements OnInit {
  constructor(private giBlade: GiBladeStack) {}

  ngOnInit(): void {}

  openBlade(): void {
    var blade = this.giBlade.open(ExampleBladeOneComponent, {
      width: "600px",
    });

    blade.afterClosed().subscribe((res) => {
      console.log("closed blade 1");
    });
  }
}

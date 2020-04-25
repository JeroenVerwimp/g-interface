import { Component, OnInit } from "@angular/core";
import { GiBladeRef, BladeOptions } from "g-interface";

@Component({
  selector: "gitest-example-blade-two",
  templateUrl: "./example-blade-two.component.html",
  styleUrls: ["./example-blade-two.component.sass"],
})
export class ExampleBladeTwoComponent implements OnInit {
  data: any;

  constructor(
    private blade: GiBladeRef<ExampleBladeTwoComponent>,
    private options: BladeOptions<any>
  ) {
    this.data = options.data;
  }

  ngOnInit(): void {}

  close() {
    this.blade.close();
  }
}

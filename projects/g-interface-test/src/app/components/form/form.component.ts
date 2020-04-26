import { Component, OnInit } from "@angular/core";

@Component({
  selector: "gitest-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.sass"],
})
export class FormComponent implements OnInit {

  checked: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  test() {
    console.log("test");
  }
}

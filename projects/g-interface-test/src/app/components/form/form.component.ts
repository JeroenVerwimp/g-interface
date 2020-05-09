import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "gitest-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.sass"],
})
export class FormComponent implements OnInit {
  checked: boolean = true;

  formGroup: FormGroup = this.fb.group({
    name: [null, Validators.required],
    email: [null, [Validators.email]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  test() {
    console.log("test");
  }

  submit(): void {
    console.log(this.formGroup);
  }
}

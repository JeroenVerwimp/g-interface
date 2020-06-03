import { Component, OnInit } from '@angular/core';
import {GiToast, ToastType} from 'g-interface';

@Component({
  selector: 'gitest-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  constructor(private readonly toast: GiToast) {}

  ngOnInit(): void {}

  click(text: string) {
    console.log(text);
  }

  showToast(type: ToastType) {
    this.toast.showToast({
      text: 'Test',
      type
    });
  }
}

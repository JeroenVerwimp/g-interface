import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {TOAST_DATA, TOAST_REF} from './toast.service';
import {ToastData} from './toast-data';
import {ToastRef} from './toast-ref';

@Component({
  selector: 'gi-toast',
  template: `
    <p>
      {{ data.text }}
      <button (click)="close()">Close</button>
    </p>
  `,
  styles: [],
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    class: 'gi-toast'
  }
})
export class ToastComponent implements OnInit, OnDestroy {

  private timeoutId: number;

  constructor(@Inject(TOAST_DATA) readonly data: ToastData, @Inject(TOAST_REF) readonly ref: ToastRef) { }

  close(): void {
    this.ref.close();
  }

  ngOnInit(): void {
    this.timeoutId = setTimeout(() => this.close(), this.data.displayTime ?? 5000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeoutId);
  }

}

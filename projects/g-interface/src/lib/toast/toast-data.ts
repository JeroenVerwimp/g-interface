export type ToastType = 'warning' | 'success' | 'info';

export interface ToastData {
  text: string;
  type: ToastType;
  displayTime?: number;
}

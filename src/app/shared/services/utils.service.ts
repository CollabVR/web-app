import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  parseActivityTime(time?: string): string {
    if (!time) {
      return '';
    }
    let date = new Date(time);
    date.setSeconds(0);
    return date.toLocaleString();
  }
}

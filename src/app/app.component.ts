import { Component } from '@angular/core';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  public value: number | null = null;

  onClick() {
    console.log(this.value);
  }
}

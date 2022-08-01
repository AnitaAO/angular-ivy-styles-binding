import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <button [style.backgroundColor] = "isActive ? 'green' : 'red'">SAVE</button>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = "Style Binding";
  isActive = true
}

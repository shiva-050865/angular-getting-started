import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Training.';
  subtitle: string = 'Intial Data';
  getData(e) {
    console.log(this.subtitle);
    this.subtitle = 'Value Changed by event.';
    return 'test' ;
  }
}

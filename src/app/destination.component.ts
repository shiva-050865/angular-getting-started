import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-data-destination',
  templateUrl: './destination.component.html'
})
export class DestinationComponent {
    @Input() data;
}

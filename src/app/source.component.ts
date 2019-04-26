import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-source',
  templateUrl: './source.component.html'
})
export class SourceComponent {
    @Input() data;
}

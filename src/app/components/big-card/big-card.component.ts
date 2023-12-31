import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: [
    './big-card.component.css',
    './big-card.responsive.component.css',
  ],
})
export class BigCardComponent {
  @Input() id: string = '';
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  date = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(
    new Date()
  );
}

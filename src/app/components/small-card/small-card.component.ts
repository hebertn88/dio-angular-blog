import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: [
    './small-card.component.css',
    './small-card.responsive.component.css',
  ],
})
export class SmallCardComponent {
  @Input() id = "";
  @Input() title = "";
  @Input() image = "";
  date = new Intl.DateTimeFormat("pt-BR", {dateStyle: "long"}).format(new Date());
}

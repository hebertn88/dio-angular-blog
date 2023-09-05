import { Component, OnInit } from '@angular/core';
import {dataFake} from '../../data/dataFake';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: [
    './content.component.css',
    './content.responsive.component.css',
  ],
})

export class ContentComponent implements OnInit {
  id: string | null = '';
  title = '';
  image = '';
  description = '';

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(param =>
      this.id = param.get('id'));

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id === id)[0];

    this.id = result.id;
    this.title = result.title;
    this.image = result.image;
    this.description = result.description;

  }
}

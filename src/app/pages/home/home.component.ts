import { Component } from '@angular/core';
import { dataFake } from '../../data/dataFake';

type ArticleType = {
  id: string;
  image: string;
  title: string;
  description: string;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    './home.responsive.component.css',
  ],
})

export class HomeComponent {
  mainArticle: ArticleType = {
    id: "",
    image: "",
    title: "",
    description: "",
  };

  asideArticles: ArticleType[] | null = [];

  constructor() {
    [this.mainArticle, ...this.asideArticles] = [...dataFake]
  }

}

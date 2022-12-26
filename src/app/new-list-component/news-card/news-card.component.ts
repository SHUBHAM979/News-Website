import { Component, Input, OnInit } from '@angular/core';
import { Resp } from '../response.modle';
@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  @Input() newsPost :Resp={source : null, author: "", title: "", description: "", url: "", urlToImage: "", content: ""};
  constructor() { }

  ngOnInit(): void {
  }

}

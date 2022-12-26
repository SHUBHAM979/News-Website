import { Component } from '@angular/core';
import { NewsSevice } from './new.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private newsService : NewsSevice) {

  }
  search = 'Search...';	
  	onSearch() {
      this.newsService.search = this.search;
      this.newsService.searchNews.emit(this.search);

    }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import { NewsSevice } from '../new.service';
import { Resp } from './response.modle';


@Component({
  selector: 'app-new-list-component',
  templateUrl: './new-list-component.component.html',
  styleUrls: ['./new-list-component.component.css']
})



export class NewListComponentComponent implements OnInit {

  newsPostArray : Resp[]=[];
  newsUrl : string=''	;
  searchflag : boolean = false;

  constructor(private http : HttpClient,private newsService :NewsSevice) { }
  search = 'Search...';
  ngOnInit(): void {
    
    this.newsService.searchNews.subscribe((search : string) => {
      this.search = search;
      this.fetchNews(this.search);
      
      
    });
    this.fetchNews(this.search);
  }

  private fetchNews (search : string) {
    if(search === 'Search...') {
    this.http.get<{
      status :string,
      totalResults : number,
      articles :Resp[]
  }>('https://newsapi.org/v2/top-headlines?country=us&apiKey=d7e6aa202721460d8f38772a027699a4')
    .pipe(map((resData :{
      status :string,
      totalResults : number,
      articles : Resp[]
  }) => {
      const newsArray:Resp[]=[];
      for (const key in resData.articles) {
        if (resData.articles.hasOwnProperty(key)) {
          newsArray.push(resData.articles[key]);
        }
      }
      return newsArray;

    })).subscribe(resData => {
      this.newsPostArray = resData;
      console.log(resData);
    });
  } else {
    this.searchflag = true;
    const first = 'https://newsapi.org/v2/everything?q=';
    const second = '&from=2022-11-26&sortBy=publishedAt&apiKey=d7e6aa202721460d8f38772a027699a4';
    this.newsUrl = first + search + second;
    console.log(this.newsUrl);
    this.http.get<{
      status :string,
      totalResults : number,
      articles :Resp[]
  }>(this.newsUrl)
    .pipe(map((resData :{
      status :string,
      totalResults : number,
      articles : Resp[]
  }) => {
      const newsArray:Resp[]=[];
      for (const key in resData.articles) {
        if (resData.articles.hasOwnProperty(key)) {
          newsArray.push(resData.articles[key]);
        }
      }
      return newsArray;

    })).subscribe(resData => {
      this.newsPostArray = resData;
      console.log(resData);
    });

  }
    

  }

}

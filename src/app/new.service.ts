import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
   })

export class NewsSevice {
    search = '';
    searchNews = new EventEmitter<string>();

    constructor(){}
}
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    @Output() changeSearch: EventEmitter<String> = new EventEmitter();

    private query: String;

    constructor() { 
        this.query = '';
    }

    getQuery(): String{
        return this.query;
    }

    setQuery(query: String){
        this.query = query;
        this.changeSearch.next(this.query);
    }
    
}


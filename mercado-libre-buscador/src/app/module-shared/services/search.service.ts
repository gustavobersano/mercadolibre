import { Injectable, Output, EventEmitter } from '@angular/core';
import { List } from '../models/models';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    @Output() changeSearch: EventEmitter<String> = new EventEmitter();

    private query: String;
    private lastResult: List;

    constructor() { 
        this.query = '';
        this.lastResult = null;
    }

    getQuery(): String{
        return this.query;
    }

    setQuery(query: String){
        this.query = query;
        this.changeSearch.next(this.query);
    }

    getLastResult(): List{
        return this.lastResult
    }

    setLastResult(lastResult: List){
        this.lastResult = lastResult
    }
    
}


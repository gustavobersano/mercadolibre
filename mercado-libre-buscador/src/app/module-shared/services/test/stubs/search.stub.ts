import { Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SearchServiceStub {

    @Output() changeSearch: Subject<String>;

    private query: String;

    constructor() { 
        this.query = 'Asus';
        this.changeSearch = new Subject();
    }

    getQuery(): String{
        return this.query;
    }

    setQuery(query: String){
        this.query = query;
        this.changeSearch.next(this.query);
    }
    
}

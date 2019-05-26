import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { List, ItemSearch } from '../models/models';

@Injectable({
    providedIn: 'root'
})
export class ItemService {

    constructor(private http: HttpClient) { }

    getItems(query): Observable<List> {
        const endpoint = `items?q=​:${query}`;
        return this.http.get<any>(endpoint);
    }

    getItemById(id): Observable<ItemSearch> {
        const endpoint = `items/${id}`;
        return this.http.get<any>(endpoint);
    }

}
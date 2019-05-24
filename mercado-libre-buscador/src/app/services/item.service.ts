import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class ItemService {
  
    constructor(private http: HttpClient) {}
  
    getItems(query): Observable<any> {
      const endpoint = `items?q=​:${query}`;
      return this.http.get<any>(endpoint);
    }
  
  }
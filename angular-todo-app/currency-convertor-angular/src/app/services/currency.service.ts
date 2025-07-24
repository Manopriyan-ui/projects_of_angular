import { Injectable } from '@angular/core';
     import { HttpClient } from '@angular/common/http';
     import { Observable } from 'rxjs';

     @Injectable({
       providedIn: 'root'
     })
     export class CurrencyService {
       private apiUrl = 'https://api.frankfurter.app/latest';

       constructor(private http: HttpClient) {}

       getCurrencies(base: string): Observable<any> {
         return this.http.get(`${this.apiUrl}?from=${base}`);
       }
     }  
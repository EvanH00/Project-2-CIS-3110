import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Method to fetch synthetic data from JSON file
  getSyntheticData(): Observable<any> {
    return this.http.get<any>('assets/data/synthetic-data.json');
  }
}

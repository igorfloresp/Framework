import { HttpClient } from '@angular/common/http';
import { Images } from '../models/placeholder.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private http: HttpClient) { }
  public getFotos(): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
  }

}

export class CrudService2 {
  constructor(private http: HttpClient) { }
  public getFotos2(): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/albums`);
  }

}

export class CrudService3 {
  constructor(private http: HttpClient) { }
  public getFotos3(): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos`);
  }

}

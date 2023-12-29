import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Teaching} from "../dto/teaching";

@Injectable({
  providedIn: 'root'
})
export class TeachingService {

  url = 'assets/data/teaching.json';

  constructor(private http: HttpClient) { }

  public getTeaching() : Observable<Teaching[]> {
    return this.http.get<Teaching[]>(this.url);
  }
}

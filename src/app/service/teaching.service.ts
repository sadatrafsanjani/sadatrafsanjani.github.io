import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Teaching} from "../dto/teaching";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TeachingService {

  url = environment.BASE_URL + '/teaching';

  constructor(private http: HttpClient) { }

  public getTeaching() : Observable<Teaching[]> {
    return this.http.get<Teaching[]>(this.url);
  }
}

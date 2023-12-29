import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Opensource} from "../dto/opensource";

@Injectable({
  providedIn: 'root'
})
export class OpensourceService {

  url = 'assets/data/opensource.json';

  constructor(private http: HttpClient) { }

  public getOpensource() : Observable<Opensource[]> {
    return this.http.get<Opensource[]>(this.url);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Opensource} from "../dto/opensource";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OpensourceService {

  url = environment.BASE_URL + '/opensource';

  constructor(private http: HttpClient) { }

  public getOpensource() : Observable<Opensource[]> {
    return this.http.get<Opensource[]>(this.url);
  }
}

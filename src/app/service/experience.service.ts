import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Experience} from "../dto/experience";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  url = environment.BASE_URL + '/experience';

  constructor(private http: HttpClient) { }

  public getExperience() : Observable<Experience[]> {
    return this.http.get<Experience[]>(this.url);
  }
}

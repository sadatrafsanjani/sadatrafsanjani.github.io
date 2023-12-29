import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Experience} from "../dto/experience";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  url = 'assets/data/experience.json';

  constructor(private http: HttpClient) { }

  public getExperience() : Observable<Experience[]> {
    return this.http.get<Experience[]>(this.url);
  }
}

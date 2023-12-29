import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Experience} from "../dto/experience";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  portfolioUrl = 'assets/data/experience.json';

  constructor(private http: HttpClient) { }

  public getPortfolio() : Observable<Experience[]> {
    return this.http.get<Experience[]>(this.portfolioUrl);
  }
}

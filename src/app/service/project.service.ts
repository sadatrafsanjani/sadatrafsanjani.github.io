import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../dto/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url = environment.BASE_URL + '/project';

  constructor(private http: HttpClient) { }

  public getPortfolio() : Observable<Project[]> {
    return this.http.get<Project[]>(this.url);
  }
}

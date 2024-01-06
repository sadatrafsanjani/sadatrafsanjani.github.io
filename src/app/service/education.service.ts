import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Education} from "../dto/education";
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EducationService {

  url = environment.BASE_URL + '/education';

  constructor(private http: HttpClient) { }

  public getEducation() : Observable<Education[]> {
    return this.http.get<Education[]>(this.url);
  }
}

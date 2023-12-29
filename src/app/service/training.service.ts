import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Training} from "../dto/training";

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  url = 'assets/data/training.json';

  constructor(private http: HttpClient) { }

  public getTraining() : Observable<Training[]> {
    return this.http.get<Training[]>(this.url);
  }
}

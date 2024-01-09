import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Training} from "../dto/training";

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  url = 'assets/data/training.json';

  constructor(private http: HttpClient) { }

  public getTraining() : Observable<Training[]> {
    return this.http.get<Training[]>(this.url).pipe(retry(1), catchError(this.errorHandler));
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {

      errorMessage = error.error.message;
    } else {

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}

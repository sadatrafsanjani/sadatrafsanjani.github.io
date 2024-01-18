import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Experience} from "../dto/response/experience";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  url = environment.BASE_URL + '/experience';

  constructor(private http: HttpClient) { }

  public getExperience() : Observable<Experience[]> {
    return this.http.get<Experience[]>(this.url).pipe(retry(1), catchError(this.errorHandler));
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

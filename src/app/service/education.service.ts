import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Education} from "../dto/education";
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EducationService {

  url = environment.BASE_URL + '/education';

  constructor(private http: HttpClient) { }

  public getEducation() : Observable<Education[]> {
    return this.http.get<Education[]>(this.url).pipe(retry(1), catchError(this.errorHandler));
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

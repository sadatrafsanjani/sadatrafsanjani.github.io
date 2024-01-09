import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Project} from "../dto/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url = environment.BASE_URL + '/project';

  constructor(private http: HttpClient) { }

  public getPortfolio() : Observable<Project[]> {
    return this.http.get<Project[]>(this.url).pipe(retry(1), catchError(this.errorHandler));
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

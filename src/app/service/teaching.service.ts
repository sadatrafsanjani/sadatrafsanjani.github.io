import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Teaching} from "../dto/response/teaching";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TeachingService {

  url = environment.BASE_URL + '/teaching';

  constructor(private http: HttpClient) { }

  public getTeaching() : Observable<Teaching[]> {
    return this.http.get<Teaching[]>(this.url).pipe(retry(1), catchError(this.errorHandler));
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

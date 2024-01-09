import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Opensource} from "../dto/opensource";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OpensourceService {

  url = environment.BASE_URL + '/opensource';

  constructor(private http: HttpClient) { }

  public getOpensource() : Observable<Opensource[]> {
    return this.http.get<Opensource[]>(this.url).pipe(retry(1), catchError(this.errorHandler));
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

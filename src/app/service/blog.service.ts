import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Blog} from "../dto/blog";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url = environment.BASE_URL + '/api/blogs';

  constructor(private http: HttpClient) { }

  public getBlog(params: any) : Observable<Blog[]> {
    return this.http.get<Blog[]>(this.url, {params}).pipe(retry(1), catchError(this.errorHandler));
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

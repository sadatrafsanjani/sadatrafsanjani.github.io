import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {CategoryResponse} from "../dto/response/CategoryResponse";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = environment.BASE_URL + '/api/category';

  constructor(private http: HttpClient) { }

  public getCategories() : Observable<CategoryResponse[]> {
    return this.http.get<CategoryResponse[]>(this.url).pipe(retry(1), catchError(this.errorHandler));
  }

  public getAllCategories() : Observable<CategoryResponse[]> {
    return this.http.get<CategoryResponse[]>(this.url + '/admin/getAll').pipe(retry(1), catchError(this.errorHandler));
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }
    else{
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}

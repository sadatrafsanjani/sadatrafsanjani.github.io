import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {BlogResponse} from "../dto/response/BlogResponse";
import {BlogRequest} from "../dto/request/BlogRequest";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url = environment.BASE_URL + '/api/blogs';

  constructor(private http: HttpClient) { }

  public getBlogs(params: any) : Observable<BlogResponse[]> {
    return this.http.get<BlogResponse[]>(this.url, {params}).pipe(retry(1), catchError(this.errorHandler));
  }

  public getAllBlogs(params: any) : Observable<BlogResponse[]> {
    return this.http.get<BlogResponse[]>(this.url + '/admin/getAll', {params}).pipe(retry(1), catchError(this.errorHandler));
  }

  public getBlogByLink(link: string) : Observable<BlogResponse> {
    return this.http.get<BlogResponse>(this.url + '/' + link).pipe(retry(1), catchError(this.errorHandler));
  }

  public getBlogById(id: string) : Observable<BlogResponse> {
    return this.http.get<BlogResponse>(this.url + '/admin/' + id).pipe(retry(1), catchError(this.errorHandler));
  }

  public postBlog(payload: BlogRequest) {

    return this.http.post<BlogResponse>(this.url + '/admin' , payload, {responseType: 'json'}).pipe(retry(1), catchError(this.errorHandler));
  }

  public updateBlog(id: string, payload: BlogRequest) {

    return this.http.put<BlogResponse>(this.url + '/admin/' +  id, payload, {responseType: 'json'}).pipe(retry(1), catchError(this.errorHandler));
  }

  public deleteBlog(id: string) {

    return this.http.delete<BlogResponse>(this.url + '/admin/' +  id, {responseType: 'json'}).pipe(retry(1), catchError(this.errorHandler));
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

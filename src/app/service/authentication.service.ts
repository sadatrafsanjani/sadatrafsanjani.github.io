import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, retry, throwError} from "rxjs";
import {LoginRequest} from "../dto/request/LoginRequest";
import {LoginResponse} from "../dto/response/LoginResponse";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url = environment.BASE_URL + '/api/authentication';

  constructor(private http: HttpClient, private storageService:StorageService) { }

  public getLoggedInUsername(){

    return this.storageService.getItem("username");
  }

  public getAccessToken(){

    return this.storageService.getItem("accessToken");
  }

  public isLoggedIn(){

    return this.storageService.getItem("username") != null || this.storageService.getItem("username") != undefined;
  }

  public login(payload: LoginRequest) : Observable<LoginResponse> {

    return this.http.post<LoginResponse>(this.url + '/login', payload, {observe: 'response'}).pipe(map ((res : any) => {

      if(res.status == 200){
        const response = res.body.body;
        this.storageService.setItem('username', response.username);
        this.storageService.setItem('accessToken', response.accessToken);

        return response;
      }

    })).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  logout(){
    this.storageService.clear();
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

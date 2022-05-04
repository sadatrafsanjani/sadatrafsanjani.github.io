import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Portfolio} from "../dto/portfolio";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  portfolioUrl = 'assets/data/portfolio.json';

  constructor(private http: HttpClient) { }

  public getPortfolio() : Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(this.portfolioUrl);
  }
}

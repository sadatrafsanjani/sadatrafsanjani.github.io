import { Component, OnInit } from '@angular/core';
import {PortfolioService} from "../service/portfolio.service";
import {Portfolio} from "../dto/portfolio";
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  portfolios: Array<Portfolio> = [];
  faLink = faLink;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.loadPortfolio();
  }

  private loadPortfolio(){
    this.portfolioService.getPortfolio().subscribe(response => {
      this.portfolios = response;
    })
  }
}

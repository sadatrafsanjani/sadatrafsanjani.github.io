import { Component, OnInit } from '@angular/core';
import {PortfolioService} from "../service/portfolio.service";
import {Portfolio} from "../dto/portfolio";
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {Experience} from "../dto/experience";
import {Opensource} from "../dto/opensource";
import {Teaching} from "../dto/teaching";
import {ExperienceService} from "../service/experience.service";
import {TeachingService} from "../service/teaching.service";
import {OpensourceService} from "../service/opensource.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  experiences: Array<Experience> = [];
  portfolios: Array<Portfolio> = [];
  opensources: Array<Opensource> = [];
  teachings: Array<Teaching> = [];

  faLink = faLink;

  constructor(private experienceService: ExperienceService,
              private portfolioService: PortfolioService,
              private opensourceService: OpensourceService,
              private teachingService: TeachingService) { }

  ngOnInit(): void {
    this.loadExperiences();
    this.loadPortfolio();
    this.loadOpensource();
    this.loadTeachings();
  }

  private loadExperiences(){
    this.experienceService.getExperience().subscribe(response => {
      this.experiences = response;
    })
  }

  private loadPortfolio(){
    this.portfolioService.getPortfolio().subscribe(response => {
      this.portfolios = response;
    })
  }

  private loadOpensource(){
    this.opensourceService.getOpensource().subscribe(response => {
      this.opensources = response;
    })
  }

  private loadTeachings(){
    this.teachingService.getTeaching().subscribe(response => {
      this.teachings = response;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Project} from "../dto/response/project";
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {Experience} from "../dto/response/experience";
import {Opensource} from "../dto/response/opensource";
import {Teaching} from "../dto/response/teaching";
import {ExperienceService} from "../service/experience.service";
import {TeachingService} from "../service/teaching.service";
import {OpensourceService} from "../service/opensource.service";
import {faGithub, faGithubAlt, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {Education} from "../dto/response/education";
import {EducationService} from "../service/education.service";
import {ProjectService} from "../service/project.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  experiences: Array<Experience> = [];
  educations: Array<Education> = [];
  projects: Array<Project> = [];
  opensources: Array<Opensource> = [];
  teachings: Array<Teaching> = [];

  faLink = faLink;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faYoutube = faYoutube;

  constructor(private titleService: Title,
              private experienceService: ExperienceService,
              private educationService: EducationService,
              private projectService: ProjectService,
              private opensourceService: OpensourceService,
              private teachingService: TeachingService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Home");
    this.loadEducations();
    this.loadExperiences();
    this.loadProject();
    this.loadOpensource();
    this.loadTeachings();
  }

  private loadEducations(){
    this.educationService.getEducation().subscribe(response => {
      this.educations = response;
    })
  }
  private loadExperiences(){
    this.experienceService.getExperience().subscribe(response => {
      this.experiences = response;
    })
  }

  private loadProject(){
    this.projectService.getPortfolio().subscribe(response => {
      this.projects = response;
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

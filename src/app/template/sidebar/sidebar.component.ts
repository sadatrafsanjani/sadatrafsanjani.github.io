import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {
  faPerson,
  faTools,
  faBuilding,
  faUniversity,
  faMicroscope,
  faCode,
  faBlackboard,
  faHome,
  faBlog,
  faGauge,
  faPlus,
  faArrowRight,
  faLink
} from '@fortawesome/free-solid-svg-icons';
import {Title} from "@angular/platform-browser";
import {AuthenticationService} from "../../service/authentication.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  faHome = faHome;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
  faPerson = faPerson;
  faTools = faTools;
  faBuilding = faBuilding;
  faUniversity = faUniversity;
  faMicroscope = faMicroscope;
  faCode = faCode;
  faBlackboard = faBlackboard;

  faArrowRight = faArrowRight;
  faBlog = faBlog;
  faGauge = faGauge;
  faPlus = faPlus;

  constructor(private titleService: Title,
              private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  isHome(){
    return this.titleService.getTitle().localeCompare('Home') == 0;
  }

  isAuthenticated(){
    return this.authenticationService.isLoggedIn();
  }

  protected readonly faLink = faLink;
}

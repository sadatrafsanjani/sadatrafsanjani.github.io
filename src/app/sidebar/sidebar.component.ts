import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPerson, faTools, faBuilding, faUniversity, faImages, faChartPie, faExternalLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
  faPerson = faPerson;
  faTools = faTools;
  faBuilding = faBuilding;
  faUniversity = faUniversity;
  faImages = faImages;
  faChartPie = faChartPie;
  faExternalLink = faExternalLink;


  constructor() { }

  ngOnInit(): void {
  }

}

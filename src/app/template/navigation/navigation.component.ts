import { Component, OnInit } from '@angular/core';
import { faNavicon } from '@fortawesome/free-solid-svg-icons';
import {AuthenticationService} from "../../service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  faNavicon = faNavicon;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
  }

  getUsername(){

    return this.authenticationService.getLoggedInUsername();
  }

  isLoggedIn(){

    return this.authenticationService.isLoggedIn();
  }

  logout(){

    this.authenticationService.logout();
    this.router.navigateByUrl('/login');
  }
}

import {Injectable} from "@angular/core";
import {AuthenticationService} from "../service/authentication.service";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard  {

  constructor(private authenticationService: AuthenticationService, private router: Router){ }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if (this.authenticationService.isLoggedIn()){
      return true;
    }
    else{

      this.router.navigateByUrl('/login');

      return false;
    }
  }

}

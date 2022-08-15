import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HelperService } from '../service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private helperService: HelperService, private router:Router ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // console.log(this.helperService.lsGetItem('token'));
    // console.log(this.helperService.lsGetItem('email'));
    // console.log(this.helperService.lsGetItem('role'));
      if (this.helperService.lsGetItem('token') && this.helperService.lsGetItem('email') && this.helperService.lsGetItem('role') == '"USER"') {
      return true;
    }
    return this.router.navigate(['login']);
  }

}

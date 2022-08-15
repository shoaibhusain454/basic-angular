import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HelperService } from '../service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private helperService: HelperService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.helperService.lsGetItem('token') && this.helperService.lsGetItem('email') && this.helperService.lsGetItem('role') == '"ADMIN"') {
      return true;
    }
    return this.router.navigate(['login']);
  }

}

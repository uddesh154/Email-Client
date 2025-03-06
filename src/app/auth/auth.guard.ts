import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, skipWhile, take, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private authService: AuthService,
              private router: Router
  ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.signedIn.pipe(
      skipWhile((value) => value === null),
      take(1),
      tap((isAuthenticated: boolean) => {
        if(!isAuthenticated) {
          this.router.navigateByUrl('/');
        }
      })
    )
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return this.authService.signedIn.pipe(
      skipWhile((value) => value === null),
      take(1),
      tap((isAuthenticated: boolean) => {
        if(!isAuthenticated) {
          this.router.navigateByUrl('/');
        }
      })
    )
  }
}

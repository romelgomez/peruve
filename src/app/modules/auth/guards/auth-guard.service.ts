import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private afAuth: AngularFireAuth, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
    return this.afAuth.authState
            // .map(auth => auth !== null);
            .map((auth) => {
              if (auth) {
                  // console.log('authenticated');
                  return true;
              }
              // console.log('not authenticated');
              this.router.navigateByUrl( route.data['notAuthenticatedURL'], { queryParams: { returnUrl: state.url } });
              return false;
            });
  }

}

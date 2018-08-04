import { Directive, HostListener, Input } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Directive({
  selector: '[appRgLogout]'
})
export class RgLogoutDirective {

  constructor(private afAuth: AngularFireAuth) {}

  @HostListener('click') onClick() {
    this.logout();
  }

  private logout() {
     this.afAuth.auth.signOut();
  }


}

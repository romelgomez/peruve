import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase';

@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.scss']
})
export class GoogleAuthComponent implements OnInit  {

  private provider: firebase.auth.GoogleAuthProvider;
  private returnUrl: string;

  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit () {
    this.provider = new firebase.auth.GoogleAuthProvider();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  signInWithPopup() {
    this.afAuth.auth.signInWithPopup(this.provider)
      .then((result) => this.successLogin(result))
      .catch((error) => this.failedLogin(error));
  }

  signInWithRedirect() {
    this.afAuth.auth.signInWithRedirect(this.provider)
      .then((result) => this.successLogin(result))
      .catch((error) => this.failedLogin(error));
  }

  successLogin (result) {
    this.router.navigateByUrl(this.returnUrl);
  }

  failedLogin (error) {
    alert(error);
  }

}

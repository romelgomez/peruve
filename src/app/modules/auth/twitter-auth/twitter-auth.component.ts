import { Component, OnInit , Input } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase';

@Component({
  selector: 'app-twitter-auth',
  templateUrl: './twitter-auth.component.html',
  styleUrls: ['./twitter-auth.component.scss']
})
export class TwitterAuthComponent  implements OnInit {

  private provider: firebase.auth.TwitterAuthProvider;
  private returnUrl: string;

  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit () {
    this.provider = new firebase.auth.TwitterAuthProvider();
    this.provider.setCustomParameters({
      'lang': 'es'
    });
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

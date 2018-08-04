import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase';

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup ({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  private returnUrl: string;

  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit () {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    // console.log('loginForm.value: ' + this.loginForm.get('email').value );
    // console.log('loginForm.value: ' + this.loginForm.get('password').value );

    this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword( this.loginForm.get('email').value, this.loginForm.get('password').value )
      .then((result) => this.successLogin(result))
      .catch((error) => this.failedLogin(error));

    // Will by temporarily deprecated
    // this.afAuth.auth.signInWithEmailAndPassword(  )
    //   .catch(error =>  {
    //     alert(error.message);
    //   });

  }

  successLogin (result) {
    this.router.navigateByUrl(this.returnUrl);
  }

  failedLogin (error) {
    alert(error);
  }

}

// ANGULAR
import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';

// FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

// APP
import { environment } from '../../../environments/environment';
import { PasswordModule } from './password';
import { RgLogoutDirective } from './logout/rg-logout.directive';
import { GoogleAuthComponent } from './google-auth/google-auth.component';
import { FacebookAuthComponent } from './facebook-auth/facebook-auth.component';
import { TwitterAuthComponent } from './twitter-auth/twitter-auth.component';
import { AuthComponent } from './auth.component';

// MATERIAL
import { MatIconModule, MatButtonModule } from '@angular/material';
// Responsive features
import { FlexLayoutModule } from '@angular/flex-layout';
import { GithubAuthComponent } from './github-auth/github-auth.component';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    // Imports firebase/auth, only needed for auth features
    AngularFireAuthModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    PasswordModule
  ],
  exports: [
    GoogleAuthComponent,
    FacebookAuthComponent,
    TwitterAuthComponent,
    GithubAuthComponent,
    PasswordModule,
    RgLogoutDirective,
    AuthComponent
  ],
  declarations: [
    GoogleAuthComponent,
    FacebookAuthComponent,
    TwitterAuthComponent,
    RgLogoutDirective,
    AuthComponent,
    GithubAuthComponent
  ]
})
export class AuthModule {}

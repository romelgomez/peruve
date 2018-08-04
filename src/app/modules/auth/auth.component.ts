import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor(http: HttpClient, iconReg: MatIconRegistry, sanitizer: DomSanitizer) {
    iconReg.addSvgIcon('google', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/google.svg'))
           .addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/facebook.svg'))
           .addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/twitter.svg'))
           .addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/github.svg'));
  }

}

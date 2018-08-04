import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule,
   MatCardModule,
   MatTabsModule,
   MatListModule,
   MatInputModule,
   MatDividerModule,
   MatIconModule } from '@angular/material';
/* import { MatCardModule, MatTabsModule, MatListModule, MatInputModule } from '@angular/material'; */

    // MatCardModule,
    // MatTabsModule,
    // MatListModule,
    // MatInputModule
    // ReactiveFormsModule,
    // FormsModule

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    LoginComponent,
    SignInComponent
  ],
  declarations: [
    LoginComponent,
    SignInComponent
  ]
})
export class PasswordModule { }

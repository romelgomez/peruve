import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


// ROOT COMPONENTS
import { AppComponent } from './components/app/app.component';
import { LandingComponent } from './components/landing/landing.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// SERVICES
import { AuthService } from './modules/auth/guards/auth.service';

// MODULES
import { AuthModule } from './modules/auth';
import { BlogModule } from './modules/blog/';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  providers : [
    AuthService,
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LandingComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    BlogModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

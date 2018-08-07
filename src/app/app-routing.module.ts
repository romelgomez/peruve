import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ROOT COMPONENTS
import { AppComponent } from './components/app/app.component';
import { LandingComponent } from './components/landing/landing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// CHILD ROUTES
import { BlogRoutingModule } from './modules/blog/blog-routing.module';

const appRoutes: Routes = [
  { path: 'home',                         component: LandingComponent },
  { path: '',                             component: LandingComponent },
  { path: '**',                           component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BlogRoutingModule
  ],
  exports: [
    RouterModule
  ],

})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


// ROOT COMPONENTS
import { AppComponent } from './components/app/app.component';
import { WhiteLabelsComponent } from './components/white-labels/white-labels.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// SERVICES
import { AuthService } from './modules/auth/guards/auth.service';
import { MapsaludApiService } from './services/mapsalud-api.service';

// MODULES
import { AuthModule } from './modules/auth';
import { SomosOhModule } from './modules/somos-oh';


const appRoutes: Routes = [
  { path: 'white-labels',                 component: WhiteLabelsComponent },
  { path: '',                             component: WhiteLabelsComponent },
  { path: '**',                           component: PageNotFoundComponent }
];



@NgModule({
  providers : [
    AuthService,
    MapsaludApiService
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    WhiteLabelsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    SomosOhModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

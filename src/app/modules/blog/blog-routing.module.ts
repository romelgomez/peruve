import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';

const blogRoutes: Routes = [
  {
      path: 'blog',
      component: BlogComponent,
      children: [
          { path: '', component: HomeComponent },
      ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild( blogRoutes )
  ],
  exports: [
    RouterModule
  ],
})
export class BlogRoutingModule { }

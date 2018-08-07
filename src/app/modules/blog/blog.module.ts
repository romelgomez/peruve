import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';

// MODULES
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [ BlogComponent, HomeComponent ],
  exports : [ BlogComponent, HomeComponent ]
})
export class BlogModule { }

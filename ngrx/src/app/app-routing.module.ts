import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentComponent } from './counter/component/component.component';
import { SampleComponent } from './counter/sample/sample/sample.component';
import { HomeComponent } from './Home/home/home.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { UpdatepostComponent } from './post/updatepost/updatepost.component';

const routes: Routes = [
  {
    path:'',
    component:SampleComponent
  },
  {
    path:'counter',
    component:ComponentComponent
  },
  {
    path:'postdata',
    component:PostListComponent
  },
  {
    path:"edit",
    component:UpdatepostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

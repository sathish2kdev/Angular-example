import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './CRUD/create/create.component';
import { ViewComponent } from './CRUD/view/view.component';

const routes: Routes = [
  {path:'',
component:CreateComponent},
{
  path:'view',
  component:ViewComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { UserViewComponent } from './user-view/user-view.component';
import { ProductViewComponent } from './product-view/product-view.component';
const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'user-create',
    component: UserCreateComponent
  },
  {
    path:'product-create',
    component:ProductCreateComponent
  },
  {
    path:'user-view',
    component:UserViewComponent
  },
  {
    path:'product-view',
    component:ProductViewComponent
  },
  {
    path:'user-edit/:id',
    component:UserEditComponent
  },
  // {
  //   path:'product-edit',
  //   component:ProductEditComponent
  // },
  {
    path:'product-edit/:id',
    component:ProductEditComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

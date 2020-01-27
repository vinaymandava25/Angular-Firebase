import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { BrowserModule } from '@angular/platform-browser';



const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    data: { title: 'Users List' }
  },
  {
    path: 'user-details/:id',
    component: UserDetailsComponent,
    data: { title: 'User Details' }
  },
  {
    path: 'user-create',
    component: CreateComponent,
    data: { title: 'Create User' }
  },
  {
    path: 'user-edit/:id',
    component: EditComponent,
    data: { title: 'Edit Users' }
  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

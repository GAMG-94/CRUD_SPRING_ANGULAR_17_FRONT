import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './components/new-user/new-user.component';
import { GetUserComponent } from './components/get-user/get-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
  {path: "nuevo", component: NewUserComponent,},
  {path: "", component: GetUserComponent, pathMatch: 'full'},
  {path: "usuario/:id", component: UpdateUserComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

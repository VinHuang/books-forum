import { SignUpComponent } from './sign-up/sign-up.component';
import { ListsComponent } from './lists/lists.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListsComponent,
    children: []
  },
  {
    path: 'signup',
    component: SignUpComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

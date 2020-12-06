import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { StylesGuideComponent } from './styles-guide/styles-guide.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full',
  },
  {
    path: 'signin',
    component: SigninComponent,
    data: {
      title: 'signin'
    }
  },
  {
    path: 'styles',
    component: StylesGuideComponent,
    data: {
      title: 'Component styles'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

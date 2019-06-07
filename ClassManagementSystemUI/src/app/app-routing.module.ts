import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ClasslistComponent } from './classlist/classlist.component';
import { componentFactoryName } from '@angular/compiler';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   component: AppComponent
  // },
  {
    path: 'classlist',
    pathMatch: 'full',
    component: ClasslistComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

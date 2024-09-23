import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const superadminroutes: Routes = [
  {
    path:'',
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(superadminroutes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }

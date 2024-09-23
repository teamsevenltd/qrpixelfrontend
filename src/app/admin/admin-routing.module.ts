import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AppearanceComponent } from './appearance/appearance.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SettingsComponent } from '../shared/component/settings/settings.component';

export const adminroutes: Routes = [
  {
    path: '',
    component: AdmindashboardComponent,
    data: { title: 'Dashboard' }
  },
  {
    path: 'appearance',
    component: AppearanceComponent,
    data: { title: 'Appearance' }
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
    data: { title: 'Analytics' }
  },
  {
    path:'setting',
    component: SettingsComponent,
    data: {title: 'Settings'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminroutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

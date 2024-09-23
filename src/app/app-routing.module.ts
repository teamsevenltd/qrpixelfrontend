import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UrlComponent } from './url/url.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { ForgetpasswordComponent } from './public/forgetpassword/forgetpassword.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { SuperadminModule } from './superadmin/superadmin.module';
import { AdminModule } from './admin/admin.module';
import { SettingsComponent } from './shared/component/settings/settings.component';
import { TemplatesComponent } from './templates/templates.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component:UrlComponent
  // },
  // {
  //   path: ':id',
  //   component: UrlComponent
  // },
  {
    path:'',
    component: LoginComponent,
    data: {title: 'Login'}
  },
  {
    path:'register',
    component: RegisterComponent,
    data: {title: 'Register'}
  },
  {
    path:'forget-password',
    component: ForgetpasswordComponent,
    data: {title: 'Forget Password'}
  },
  {
    path:'templates',
    component: TemplatesComponent
  },
  {
    path: 'superadmin',
    // component: AppLayoutComponent,
    // canActivate: [AuthGuard],
    // data: { role: 'superadmin' },
    loadChildren: () => SuperadminModule,
  },
  {
    path: 'admin',
    component: AppLayoutComponent,
    loadChildren: () => AdminModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlComponent } from './url/url.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { ForgetpasswordComponent } from './public/forgetpassword/forgetpassword.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
// import { HeaderComponent } from './shared/modules/header/header.component';
import { AdminModule } from './admin/admin.module';
import { SuperadminModule } from './superadmin/superadmin.module';
import { SharedModule } from './shared/shared.module';
import { TemplatesComponent } from './templates/templates.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    ForgetpasswordComponent,
    AppLayoutComponent,
    TemplatesComponent,
    // HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DragDropModule,
    ImageCropperModule,
    SuperadminModule,
    AdminModule,
    SharedModule
  ],
  // exports:[
  //   RouterModule
  // ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
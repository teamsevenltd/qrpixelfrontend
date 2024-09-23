import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ImageCropperModule } from 'ngx-image-cropper';

import { AdminRoutingModule } from './admin-routing.module';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AppearanceComponent } from './appearance/appearance.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdmindashboardComponent,
    AppearanceComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DragDropModule,
    ImageCropperModule,
    SharedModule
  ]
})
export class AdminModule { }
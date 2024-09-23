import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { SettingsComponent } from './component/settings/settings.component';
import { PersonalinformationComponent } from './component/settings/personalinformation/personalinformation.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    PersonalinformationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    // RouterModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { RouterModule } from '@angular/router';
import { SpeakerHomeComponent } from './speaker-home/speaker-home.component';
import { StudentHomeComponent } from './student-home/student-home.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminHomeComponent,
    SpeakerHomeComponent,
    StudentHomeComponent,
 
    LandingPageComponent,
      LoginComponent,
      RegisterComponent
  ],
  imports: [
    CommonModule,RouterModule,FormsModule
  ],
  exports:[
    AdminHomeComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    StudentHomeComponent,
    SpeakerHomeComponent
  ]
})
export class HomeModule { }

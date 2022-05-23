import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEventDetailsComponent } from './event/admin-event-details/admin-event-details.component';
import { AdminEventListComponent } from './event/admin-event-list/admin-event-list.component';
import { AdminHomeComponent } from './home/admin-home/admin-home.component';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { SpeakerHomeComponent } from './home/speaker-home/speaker-home.component';
import { StudentHomeComponent } from './home/student-home/student-home.component';
import { AdminSpeakerDetailsComponent } from './speaker/admin-speaker-details/admin-speaker-details.component';
import { AdminSpeakerListComponent } from './speaker/admin-speaker-list/admin-speaker-list.component';
import { AdminStudentDetailsComponent } from './student/admin-student-details/admin-student-details.component';
import { AdminStudentListComponent } from './student/admin-student-list/admin-student-list.component';




const routes: Routes = [
  {path:"adminstudents",component:AdminStudentListComponent},
  {path:"adminspeakers",component:AdminSpeakerListComponent},
  {path:"adminevents",component:AdminEventListComponent},
  {path:"adminevents/details/:id",component:AdminEventDetailsComponent},
  {path:"adminstudents/details/:id",component:AdminStudentDetailsComponent},
  {path:"adminspeakers/details/:id",component:AdminSpeakerDetailsComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  // {path:"studentedit/:id",component:StudentEditComponent},
  {path:"student/:id",component:StudentHomeComponent},
  {path:"speaker/:id",component:SpeakerHomeComponent},
  {path:"admin/home",component:AdminHomeComponent},
  {path:"student",component:StudentHomeComponent},
  {path:"speaker",component:SpeakerHomeComponent},
  {path:"landing",component:LandingPageComponent},
  {path:" ",redirectTo:"landing",pathMatch:"full"}
 

  // {path:"showevents/:id",component:StudentEventsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

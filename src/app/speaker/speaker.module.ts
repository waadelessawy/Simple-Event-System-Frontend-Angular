import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSpeakerListComponent } from './admin-speaker-list/admin-speaker-list.component';
import { AdminSpeakerDetailsComponent } from './admin-speaker-details/admin-speaker-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeModule } from '../home/home.module';








@NgModule({
  declarations: [
              
    AdminSpeakerListComponent,
    AdminSpeakerDetailsComponent,
 

 
  ],
  imports: [
    CommonModule,RouterModule,FormsModule,HomeModule
  ],
  exports:[
    AdminSpeakerDetailsComponent,
    AdminSpeakerListComponent,


    
  ]
})
export class SpeakerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminEventListComponent } from './admin-event-list/admin-event-list.component';
import { AdminEventDetailsComponent } from './admin-event-details/admin-event-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminEventListComponent,
    AdminEventDetailsComponent
  ],
  imports: [
    CommonModule,RouterModule,FormsModule
  ],
  exports:[
    AdminEventDetailsComponent,
    AdminEventListComponent
  ]
})
export class EventModule { }

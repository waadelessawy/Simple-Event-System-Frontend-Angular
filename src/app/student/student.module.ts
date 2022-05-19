import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AdminStudentListComponent } from './admin-student-list/admin-student-list.component';
import { AdminStudentDetailsComponent } from './admin-student-details/admin-student-details.component';




@NgModule({
  declarations: [
 
   
    AdminStudentListComponent,
    AdminStudentDetailsComponent,
 
   
  ],
  imports: [
    CommonModule,FormsModule,RouterModule
  ],
  exports:[
    AdminStudentDetailsComponent,
    AdminStudentListComponent,
   
  ]

})
export class StudentModule { }

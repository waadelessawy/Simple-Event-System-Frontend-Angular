import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-admin-student-details',
  templateUrl: './admin-student-details.component.html',
  styleUrls: ['./admin-student-details.component.less']
})
export class AdminStudentDetailsComponent implements OnInit {
  student:Student=new Student(0,"","","","");

  constructor(public ac:ActivatedRoute,public StudentService:StudentService,public router:Router) { }
  // ngOnDestroy(){
  //   this.sub?.unsubscribe();
  //   this.sub2?.unsubscribe();
  //   console.log("destroy");
  // }
  // sub:Subscription|null=null;
  // sub2:Subscription|null=null;
  ngOnInit(): void {

    this.ac.params.subscribe(a=>{
      this.StudentService.getStudentById(a['id']).subscribe(
        s=>this.student=s

        
      )
      console.log(this.student);
       
    })
 
  }

  update(){
    this.ac.params.subscribe(a=>{
      this.StudentService.getStudentById(a['id']).subscribe(
        s=>this.student=s
        
      )
    })
 
    this.StudentService.UpdateStudent(this.student,this.student._id).subscribe(a=>{
      this.router.navigate(['/adminstudents'])

    })

  
  }
  }



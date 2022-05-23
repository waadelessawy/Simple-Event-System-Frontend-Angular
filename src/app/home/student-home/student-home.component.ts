import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { EventService } from 'src/app/event.service';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';
import {Event} from 'src/app/_models/event'

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.less']
})
export class StudentHomeComponent implements OnInit {

  student:Student=new Student(0,"","","","");
  students:Student[]=[];
  events:Event[]=[];
  parameterVal=0;

  constructor(public ac:ActivatedRoute,public StudentService:StudentService,public router:Router,public EventService:EventService) { }
  ngOnInit(): void {
    this.ac.params.subscribe(a=>{
      this.parameterVal=a['id'];
      console.log(this.parameterVal);
  
    })
   this.EventService.getAllEvents().subscribe(a=>{
    //  this.events=a;
     for(let i=0;i<a.length;i++){
        for(let j=0;j<a[i].studentsId.length;j++){
          if(this.parameterVal==a[i].studentsId[j]){
            console.log(a[i].studentsId[j])
            this.events.push(a[i]);
          }
        }
     }
   })
 console.log(this.events)
   

    this.ac.params.subscribe(a=>{
      this.StudentService.getStudentById(a['id']).subscribe(
        s=>this.student=s
      )

       
    })
 
  }

  update(){
 
    this.StudentService.UpdateStudent(this.student,this.student._id).subscribe(a=>{
    
    })

  
  }
  }


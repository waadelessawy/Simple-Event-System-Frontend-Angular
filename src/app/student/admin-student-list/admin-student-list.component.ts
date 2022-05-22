import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import {Student} from 'src/app/_models/student'


@Component({
  selector: 'app-admin-student-list',
  templateUrl: './admin-student-list.component.html',
  styleUrls: ['./admin-student-list.component.less']
})
export class AdminStudentListComponent implements OnInit {
  constructor(public StudentService:StudentService,public router:Router) { }

  students:Student[]=[];
  std : Student=new Student(0,"","","");
  nstd : Student=new Student(0,"","non","non");
  ngOnInit(): void {
    this.StudentService.getAllStudents().subscribe(a=>{
      
      this.students=a  ;
      console.log(this.students);
      console.log(a);

     
    })
  


  }
  Delete(id:number){
    this.std=this.students[id];
    this.StudentService.DeleteStudent(id).subscribe(a=>{
      this.ngOnInit()
    })
  
  }
  add(){

    this.StudentService.CreateStudent(this.nstd).subscribe(a=>{
      // this.router.navigate(['/adminstudents'])
    })

    }

}

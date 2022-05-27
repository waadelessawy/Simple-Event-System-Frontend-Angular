import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { SpeakerService } from 'src/app/speaker.service';
import { StudentService } from 'src/app/student.service';
import {Speaker }from 'src/app/_models/speaker'
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
   
  constructor(public studentService:StudentService,public fb:FormBuilder,public speakerService:SpeakerService,public authService:AuthenticationService,public router:Router) { }
  speaker:Speaker=new Speaker("","","","","","","","speaker");
  student:Student=new Student(0,"","","","student");
  speakers:Speaker[]=[];
  students:Student[]=[];
  ngOnInit(): void {
  
  }
  private selectedLink: string="student";        

  setradio(e: string): void {
      this.selectedLink = e;  
  }  

isSelected(name: string): boolean {  

    if (!this.selectedLink) { 
        return false;  
    
    }    
  
    return (this.selectedLink === name); 
}  
signup(){
if(this.selectedLink == 'speaker'){
  console.log("Speakers", this.selectedLink)

  this.speaker.role="speaker";

        this.speakerService.CreateSpeaker(this.speaker).subscribe();
          // this.router.navigateByUrl('/speaker/'+this.speaker._id)
          this.router.navigateByUrl('/login')


}else if(this.selectedLink == 'student'){

  this.student.role="student";
  
  
        this.studentService.CreateStudent(this.student).subscribe();
        // this.router.navigateByUrl('/student/'+this.student._id)
        this.router.navigateByUrl('/login')


}
 

 
  
}
}

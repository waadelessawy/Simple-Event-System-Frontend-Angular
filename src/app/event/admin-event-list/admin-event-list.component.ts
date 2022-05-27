import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { SpeakerService } from 'src/app/speaker.service';
import { StudentService } from 'src/app/student.service';
import { Speaker } from 'src/app/_models/speaker';
import { Student } from 'src/app/_models/student';
import {Event} from 'src/app/_models/event'


@Component({
  selector: 'app-admin-event-list',
  templateUrl: './admin-event-list.component.html',
  styleUrls: ['./admin-event-list.component.less']
})
export class AdminEventListComponent implements OnInit {

  constructor(public EventService:EventService,public router:Router,public StudentService:StudentService,public SpeakerService:SpeakerService) { }
  


  events:Event[]=[];
  event : Event=new Event(0,"","","",[""],[0]);
  nevent : Event=new Event(0,"","","",[""],[0]);
  speaker : Speaker=new Speaker("","","","","","","","");
  speakers : Speaker[]=[]
  students : Student[]=[]
  student : Student =new Student(0,"","","","");
  ngOnInit(): void {
    this.EventService.getAllEvents().subscribe(a=>{
      
      this.events=a  ;
     
      console.log(a);
    })
    this.StudentService.getAllStudents().subscribe(a=>{
      this.students=a;
    })
    this.SpeakerService.getAllSpeakers().subscribe(a=>{
      this.speakers=a;
    })

    


  }
  Delete(id:number){
   
    this.EventService.DeleteEvent(id).subscribe(a=>{
      this.ngOnInit()
    })
 

   

  }
  add(){
    this.EventService.CreateEvent(this.nevent).subscribe(a=>{
      this.ngOnInit();
    })
    
 
    }

}

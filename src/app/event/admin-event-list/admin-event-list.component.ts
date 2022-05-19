import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
// import { StudentService } from 'src/app/student.service';
import {Event} from 'src/app/_models/event'


@Component({
  selector: 'app-admin-event-list',
  templateUrl: './admin-event-list.component.html',
  styleUrls: ['./admin-event-list.component.less']
})
export class AdminEventListComponent implements OnInit {

  constructor(public EventService:EventService,public router:Router) { }
  


  events:Event[]=[];
  event : Event=new Event(0,"","",0,[0],[0]);
  nevent : Event=new Event(0,"","",0,[0],[0]);
  otherSpeakers="";
  studentsId="";

  ngOnInit(): void {
    this.EventService.getAllEvents().subscribe(a=>{
      
      this.events=a  ;
     
      console.log(a);
    })

    


  }
  Delete(id:number){
    this.event=this.events[id];
    this.EventService.DeleteEvent(id).subscribe(a=>{
      this.ngOnInit()
    })
 

   

  }
  add(){
    this.nevent.otherSpeakersId=this.otherSpeakers.split(',').map(function(item) {
      return parseInt(item, 10);
    });
   this.nevent.studentsId=this.studentsId.split(',').map(function(item) {
       return parseInt(item, 10);
   });
    console.log(this.nevent._id);
    // this.nevent._id=5;

    this.EventService.CreateEvent(this.nevent).subscribe(a=>{
      this.ngOnInit();
    })
    
 
    }

}

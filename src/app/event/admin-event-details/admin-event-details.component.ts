import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Event } from 'src/app/_models/event';
import { EventService } from 'src/app/event.service';
import { SpeakerService } from 'src/app/speaker.service';
import { StudentService } from 'src/app/student.service';
import { Speaker } from 'src/app/_models/speaker';
import { Student } from 'src/app/_models/student';


@Component({
  selector: 'app-admin-event-details',
  templateUrl: './admin-event-details.component.html',
  styleUrls: ['./admin-event-details.component.less']
})
export class AdminEventDetailsComponent implements OnInit {

  event : Event=new Event(0,"","",0,[0],[0]);
  speaker : Speaker=new Speaker(0,"","","","","","","");
  speakers : Speaker[]=[]
  students : Student[]=[]
  student : Student =new Student(0,"","","","");


  constructor(public ac:ActivatedRoute,public EventService:EventService,public router:Router,public StudentService:StudentService,public SpeakerService:SpeakerService) { }

  ngOnInit(): void {


      this.ac.params.subscribe(a=>{
        this.EventService.getEventById(a['id']).subscribe(
          s=>this.event=s
        )

      })
      this.StudentService.getAllStudents().subscribe(a=>{
        this.students=a;
      })
      this.SpeakerService.getAllSpeakers().subscribe(a=>{
        this.speakers=a;
      })

    }

    update(){
      this.ac.params.subscribe(a=>{
        this.EventService.getEventById(a['id']).subscribe(
          s=>this.event=s

        )
  
      })
      this.EventService.UpdateEvent(this.event._id,this.event).subscribe(a=>{
        console.log("Done");
        this.router.navigate(['/adminevents'])


      })


    }
    }




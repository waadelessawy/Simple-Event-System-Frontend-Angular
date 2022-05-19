import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Event } from 'src/app/_models/event';
import { EventService } from 'src/app/event.service';


@Component({
  selector: 'app-admin-event-details',
  templateUrl: './admin-event-details.component.html',
  styleUrls: ['./admin-event-details.component.less']
})
export class AdminEventDetailsComponent implements OnInit {

  event : Event=new Event(0,"","",0,[0],[0]);
   x=[];
   otherSpeakers="";
   studentsId="";

  constructor(public ac:ActivatedRoute,public EventService:EventService,public router:Router) { }

  ngOnInit(): void {


      this.ac.params.subscribe(a=>{
        this.EventService.getEventById(a['id']).subscribe(
          s=>this.event=s


        )
        console.log(this.event);

      })

    }

    update(){
      this.ac.params.subscribe(a=>{
        this.EventService.getEventById(a['id']).subscribe(
          s=>this.event=s

        )
  
      })

      this.event.otherSpeakersId=this.otherSpeakers.split(',').map(function(item) {
        return parseInt(item, 10);
      });
     this.event.studentsId=this.studentsId.split(',').map(function(item) {
         return parseInt(item, 10);
     });
  
      console.log(this.otherSpeakers);
      this.EventService.UpdateEvent(this.event._id,this.event).subscribe(a=>{
        console.log("Done");
        this.router.navigate(['/adminevents'])
        console.log(this.event.otherSpeakersId);

      })


    }
    }




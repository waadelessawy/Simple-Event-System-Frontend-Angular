import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {Event} from 'src/app/_models/event'
import { EventService } from 'src/app/event.service';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-home',
  templateUrl: './speaker-home.component.html',
  styleUrls: ['./speaker-home.component.less']
})
export class SpeakerHomeComponent implements OnInit {

  speaker:Speaker=new Speaker(0,"","","","","","","");
  students:Speaker[]=[];
  events:Event[]=[];
  parameterVal=0;

  constructor(public ac:ActivatedRoute,public SpeakerService:SpeakerService,public router:Router,public EventService:EventService) { }
  ngOnInit(): void {
    this.ac.params.subscribe(a=>{
      this.parameterVal=a['id'];
      console.log(this.parameterVal);
  
    })
   this.EventService.getAllEvents().subscribe(a=>{
    //  this.events=a;
     for(let i=0;i<a.length;i++){
        for(let j=0;j<a[i].otherSpeakersId.length;j++){
          if(this.parameterVal==a[i].otherSpeakersId[j]){
            console.log(a[i].otherSpeakersId[j])
            this.events.push(a[i]);
          }
        }
     }
   })

   this.EventService.getAllEvents().subscribe(a=>{
    //  this.events=a;
     for(let i=0;i<a.length;i++){
       
          if(this.parameterVal==a[i].mainSpeakerId){
            console.log(a[i].otherSpeakersId)
            this.events.push(a[i]);
          }
        
     }
   })


   

    this.ac.params.subscribe(a=>{
      this.SpeakerService.getSpeakerById(a['id']).subscribe(
        s=>this.speaker=s
      )

       
    })
 
  }

  update(){
 
    this.SpeakerService.UpdateSpeaker(this.speaker,this.speaker._id).subscribe(a=>{
    
    })

  
  }
  }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';


@Component({
  selector: 'app-admin-speaker-details',
  templateUrl: './admin-speaker-details.component.html',
  styleUrls: ['./admin-speaker-details.component.less']
})
export class AdminSpeakerDetailsComponent implements OnInit {

  speaker:Speaker=new Speaker(0,"","","","","","","");

  constructor(public ac:ActivatedRoute,public SpeakerService:SpeakerService,public router:Router) { }

  ngOnInit(): void {

    this.ac.params.subscribe(a=>{
      this.SpeakerService.getSpeakerById(a['id']).subscribe(
        s=>this.speaker=s

        
      ) 
    })

  }

  update(){
    this.ac.params.subscribe(a=>{
      this.SpeakerService.getSpeakerById(a['id']).subscribe(
        s=>this.speaker=s
        
      )
    })
 
    this.SpeakerService.UpdateSpeaker(this.speaker,this.speaker._id).subscribe(a=>{
      this.router.navigate(['/adminspeakers'])

    })

  
  }


}

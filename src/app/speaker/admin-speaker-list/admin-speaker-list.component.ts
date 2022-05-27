import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';



@Component({
  selector: 'app-admin-speaker-list',
  templateUrl: './admin-speaker-list.component.html',
  styleUrls: ['./admin-speaker-list.component.less']
})
export class AdminSpeakerListComponent implements OnInit {

  constructor(public SpeakerService:SpeakerService,public router:Router) { }

  speakers:Speaker[]=[];
  spk : Speaker=new Speaker("","","","","","","","");
  nspk : Speaker=new Speaker("","","non","non","","","","");
  ngOnInit(): void {
    console.log("hellooooooooooooooooooooooooooooooooooooo");
    this.SpeakerService.getAllSpeakers().subscribe(a=>{
      
      this.speakers=a  ;

    })
    
  }
  Delete(id:String){
    // this.spk=this.speakers[id];
    this.SpeakerService.DeleteSpeaker(id).subscribe(a=>{
      this.ngOnInit()
    })


  }
  add(){

    this.SpeakerService.CreateSpeaker(this.nspk).subscribe(a=>{
     
    })

    }

}

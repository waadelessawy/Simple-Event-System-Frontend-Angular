import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit, OnChanges {
  isShown: boolean = false ;
  constructor(public router:Router,public ar:ActivatedRoute) { }

  ngOnInit(): void {

   
    this.isShown=true;
    
  }
  
  ngOnChanges(changes: SimpleChanges): void {

    
  }
  DivShow() {
    this.isShown = ! this.isShown;
   
    // if(this.router.url=='/login'){
    //   console.log(this.router.url)
    //   console.log("true")
    //   this.isShown = ! this.isShown;
    // }

    
    }

}

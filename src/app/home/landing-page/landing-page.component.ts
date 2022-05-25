import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { access } from 'fs';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit, OnChanges {
  isShown: boolean = true ;
  constructor(public router:Router,public ar:ActivatedRoute) { }

  ngOnInit(): void {

  
  }
  
  ngOnChanges(changes: SimpleChanges): void {

    
  }
  DivShow() {
    this.isShown = false;
  
    
    }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  isShown: boolean = true ;
  constructor() { }

  ngOnInit(): void {
  }
  DivShow() {
    this.isShown = false;
  
    
    }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.less']
})
export class AdminHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(localStorage.getItem('token'))
  }

}

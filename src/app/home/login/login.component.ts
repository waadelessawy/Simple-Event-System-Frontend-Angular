import { Component, OnInit } from '@angular/core';
import { User } from "../../_models/user";
import { AuthenticationService } from '../../authentication.service';

import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';
import { request } from 'http';
import { HttpHeaders } from '@angular/common/http'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
    
  constructor(public loginService: AuthenticationService, public router:Router,public studSer:StudentService) {

  }
  studs:Student[]=[];
  user : User = new User("","");
  
  
  ngOnInit(): void {
         
  }
    validateLogin() {
      if(this.user.email=="waad.elessawy@gmail.com" && this.user.password=="123") {
        this.loginService.login(this.user).subscribe(result => {
      //resukt==>token
      
        localStorage.setItem('token', result[1]);
        localStorage.setItem('role', result[2]);

        let t=   localStorage.getItem('token');
        console.log('result is ', result[1]);
        console.log('tokeeeen'+t);
        console.log('roleeee'+result[2])
        this.router.navigateByUrl("/admin/home")
     
        
      }, error => {
        console.log('error is ', error);
      });
  
      }
      else {
        this.studSer.getAllStudents().subscribe(a=>{
          this.studs=a  ;
          console.log(this.studs);
          console.log(a);
        })
  
  
        console.log("students");
        let flag = "f";
        console.log('bla bla bla')
        for (var val of this.studs){
         console.log(val+" hiiii");
         
            if(this.user.email==val.email && this.user.password==val.password ){
              this.loginService.login(this.user).subscribe(result => {
                console.log('result is ', result);
                this.router.navigateByUrl("/student/details")
                // flag="t";
  
                
              }
              , error => {
                console.log('error is ', error);
              }
  
              );
              break;
              
          
            }
  
  
        }
          // else{
          //   alert('enter user name and password');
          // }
        }
  
       
    }
  
  
  
  }
  
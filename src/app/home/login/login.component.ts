import { Component, OnInit } from '@angular/core';
import { User } from "../../_models/user";
import { AuthenticationService } from '../../authentication.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';
import {Speaker}from 'src/app/_models/speaker'
import { request } from 'http';
import { HttpHeaders } from '@angular/common/http'
import { SpeakerService } from 'src/app/speaker.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
    
  constructor(public loginService: AuthenticationService, public router:Router,public studSer:StudentService,public speakSer:SpeakerService) {

  }
  studs:Student[]=[];
  speakers:Speaker[]=[];
  user : User = new User("","");
  role:string="";
  
  ngOnInit(): void {
   
 
  
    this.studSer.getAllStudents().subscribe(a=>{
      this.studs=a ;
    
    })
    this.speakSer.getAllSpeakers().subscribe(a=>{
      this.speakers=a ;
    
    })
         
  }
  home(){
    this.router.navigateByUrl("/landing")
  }
    validateLogin() {
      if(this.user.email=="waad.elessawy@gmail.com" && this.user.password=="123") {
        this.loginService.login(this.user).subscribe(result => {
          this.role=result[2];
          console.log("role is:"+this.role)
      //resukt==>token
      
        localStorage.setItem('token', result[1]);
        localStorage.setItem('role', result[2]);

        let t=   localStorage.getItem('token');
       
        console.log('roleeee'+result[2])
        console.log("role is:"+this.role)
        this.router.navigateByUrl("/admin/home")

     
        
      }, error => {
        console.log('error is ', error);
      });
  
      }
      else  {
  
        console.log("students");
        let flag = "f";
        console.log('bla bla bla')
        for (var val of this.studs){
         console.log(val+" hiiii");
         
            if(this.user.email==val.email && this.user.password==val.password ){
              
              this.loginService.login(this.user).subscribe(result => {
               
                this.router.navigateByUrl("/student/"+val._id)
              }
              , error => {
                console.log('error is ', error);
              }
  
              );
              break;
              
          
            }
  
  
        }
        
        }
          
  
  
          console.log("speakers");
          let flag = "f";
          console.log('bla bla bla')
          for (var val1 of this.speakers){
           console.log(val1+" hiiii");
           
              if(this.user.email==val1.email && this.user.password==val1.password ){
                console.log('email of mongo '+val1.email);
                console.log('email of bodyy '+this.user.email);
                this.loginService.login(this.user).subscribe(result => {
                  console.log('result is ', result);
                  
                  this.router.navigateByUrl("/speaker/"+val1._id)
                  // flag="t";
    
                  
                }
                , error => {
                  console.log('error is ', error);
                }
    
                );
                break;
                
            
              }
    
    
          }
       
  
       
    }
  
  
  
  }
  
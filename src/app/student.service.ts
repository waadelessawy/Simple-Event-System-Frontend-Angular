import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { response } from 'express';
import { Student } from './_models/student';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl="http://localhost:7000/students/";
  httpOptions= {headers:{}}
  GetToken()  {
    let t = localStorage.getItem('token');
    
    let headers_object = new HttpHeaders().set("Authorization","Bearer "+t);
    this.httpOptions={
      headers:headers_object
    };
  }
 
  getAllStudents(){

    this.GetToken();
    console.log(this.httpOptions);
    console.log("token in side students"+localStorage.getItem('token'));
    return this.http.get<Student[]>(this.baseUrl,this.httpOptions)
  }

  getStudentById(id:number){
    this.GetToken();
    return this.http.get<Student>(this.baseUrl+id,this.httpOptions);
  }

  UpdateStudent(std:Student,id:number){
    this.GetToken();
    return this.http.put<Student>(this.baseUrl+id,std,this.httpOptions);
  }
  CreateStudent(std:Student){
    this.GetToken();
   return this.http.post<Student>(this.baseUrl,std,this.httpOptions);

  }
  DeleteStudent(id:number){
    this.GetToken();
    return this.http.delete<Student>(this.baseUrl+id,this.httpOptions);

  }

  constructor(public http:HttpClient) { }
}

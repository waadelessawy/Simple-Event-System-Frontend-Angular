import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { Student } from './_models/student';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl="http://localhost:7000/students/";
  getAllStudents(){
    return this.http.get<Student[]>(this.baseUrl)
  }

  // getStudentByIdForAdmin(id:number){
  //   return this.http.get<Student>(this.baseUrl+id);
  // }
  getStudentById(id:number){
    return this.http.get<Student>(this.baseUrl+id);
  }
  // UpdateStudentByAdmin(id:number,std:Student){
  //   return this.http.put<Student>(this.baseUrl+id,std);
  // }

  UpdateStudent(std:Student,id:number){
    return this.http.put<Student>(this.baseUrl+id,std);
  }
  CreateStudent(std:Student){
   return this.http.post<Student>(this.baseUrl,std);

  }
  DeleteStudent(id:number){
    return this.http.delete<Student>(this.baseUrl+id);

  }

  constructor(public http:HttpClient) { }
}

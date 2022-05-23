import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { response } from 'express';
import { Speaker } from './_models/speaker';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  
  baseUrl="http://localhost:7000/speakers/";
  httpOptions= {headers:{}}
  GetToken()  {
    let t = localStorage.getItem('token');
    let headers_object = new HttpHeaders().set("Authorization","Bearer"+t);
    this.httpOptions={
      headers:headers_object
    }
  }
  getAllSpeakers(){
    this.GetToken();
    return this.http.get<Speaker[]>(this.baseUrl,this.httpOptions)
  }

  getSpeakerById(id:number){
    this.GetToken();
    return this.http.get<Speaker>(this.baseUrl+id,this.httpOptions);
  }

  UpdateSpeaker(spk:Speaker,id:number){
    this.GetToken();
    return this.http.put<Speaker>(this.baseUrl+id,spk,this.httpOptions);
  }
  CreateSpeaker(spk:Speaker){
    // this.GetToken();
   return this.http.post<Speaker>(this.baseUrl,spk);

  }
  DeleteSpeaker(id:number){
    this.GetToken();
    return this.http.delete<Speaker>(this.baseUrl+id,this.httpOptions);

  }

  constructor(public http:HttpClient) {}
}

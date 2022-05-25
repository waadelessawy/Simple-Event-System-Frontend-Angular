import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { response } from 'express';
import { Event } from './_models/event';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseUrl="http://localhost:7000/events/";
  httpOptions= {headers:{}}
  GetToken()  {
    let t = localStorage.getItem('token');
    console.log("token inside get"+t);

    let headers_object = new HttpHeaders().set("Authorization","Bearer "+t);
    this.httpOptions={
      headers:headers_object
    }
  }
  getAllEvents(){
    this.GetToken();
    return this.http.get<Event[]>(this.baseUrl,this.httpOptions)
  }

  UpdateEvent(id:number,event:Event){
    this.GetToken();
    return this.http.put<Event>(this.baseUrl+id,event,this.httpOptions);
  }
  getEventById(id:number){
    this.GetToken();
    return this.http.get<Event>(this.baseUrl+id,this.httpOptions);
  }
  CreateEvent(event:Event){
    this.GetToken()
   return this.http.post<Event>(this.baseUrl,event,this.httpOptions);

  }
  DeleteEvent(id:number){
    this.GetToken()
    return this.http.delete<Event>(this.baseUrl+id,this.httpOptions);

  }

  constructor(public http:HttpClient) { }
}

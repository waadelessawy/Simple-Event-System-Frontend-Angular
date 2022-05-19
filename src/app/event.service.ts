import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { Event } from './_models/event';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseUrl="http://localhost:7000/events/";
  getAllEvents(){
    return this.http.get<Event[]>(this.baseUrl)
  }

  UpdateEvent(id:number,event:Event){
    return this.http.put<Event>(this.baseUrl+id,event);
  }
  getEventById(id:number){
    return this.http.get<Event>(this.baseUrl+id);
  }
  CreateEvent(event:Event){
   return this.http.post<Event>(this.baseUrl,event);

  }
  DeleteEvent(id:number){
    return this.http.delete<Event>(this.baseUrl+id);

  }

  constructor(public http:HttpClient) { }
}

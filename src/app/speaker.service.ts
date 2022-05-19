import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { Speaker } from './_models/speaker';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  
  baseUrl="http://localhost:7000/speakers/";
  getAllSpeakers(){
    return this.http.get<Speaker[]>(this.baseUrl)
  }

  // getSpeakerByIdForAdmin(id:number){
  //   return this.http.get<Speaker>(this.baseUrl+id);
  // }
  getSpeakerById(id:number){
    return this.http.get<Speaker>(this.baseUrl+id);
  }
  // UpdateSpeakerByAdmin(id:number,spk:Speaker){
  //   return this.http.put<Speaker>(this.baseUrl+id,spk);
  // }

  UpdateSpeaker(spk:Speaker,id:number){
    return this.http.put<Speaker>(this.baseUrl+id,spk);
  }
  CreateSpeaker(spk:Speaker){
   return this.http.post<Speaker>(this.baseUrl,spk);

  }
  DeleteSpeaker(id:number){
    return this.http.delete<Speaker>(this.baseUrl+id);

  }

  constructor(public http:HttpClient) {}
}

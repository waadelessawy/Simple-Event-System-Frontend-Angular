import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl="http://localhost:7000/";
 
  
  constructor(public http:HttpClient) { }
  login(data:any)
  {
    
    console.log("dataaaaaaaaaa",data);
    return this.http.post<any>(this.baseUrl + "login",data);
  }
  register(data:any)
  {
    console.log(data);
    return this.http.post<any>(this.baseUrl + "register",data);
  }

}

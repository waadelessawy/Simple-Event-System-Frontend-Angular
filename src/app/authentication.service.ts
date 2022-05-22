import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl="http://localhost:7000/";
  httpOptions= {headers:{}}
  GetToken()  {
    let t = localStorage.getItem('token');
    console.log("token inside : "+t);
    let headers_object = new HttpHeaders().set("Authorization","Bearer"+t);
    this.httpOptions={
      headers:headers_object
    }
  }
  
  constructor(public http:HttpClient) { }
  login(data:any)
  {
    this.GetToken();
    console.log(data);
    return this.http.post<any>(this.baseUrl + "login",data,this.httpOptions);
  }

}

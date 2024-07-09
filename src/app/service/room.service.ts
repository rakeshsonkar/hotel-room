import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  apiEndPoint:string="http:localhost/test"
  constructor(private http:HttpClient) { }
  login(obj:any){
    return this.http.post(this.apiEndPoint+"login",obj);
  }
  
}

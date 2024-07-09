import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private roomservice:RoomService,private router:Router) { }

  loginObj:any={
    "phone":"",
    "password":""
  }

  ngOnInit(): void {
  }
  onLogin(){
    this.router.navigateByUrl('/dashboard')
    //debugger
    // this.roomservice.login(this.loginObj).subscribe((res:any)=>{
    //   if(res.result){
    //     localStorage.setItem('hotelUser',JSON.stringify(res.data));
    //     this.router.navigateByUrl('/dashboard')
    //   }else{
    //     localStorage.setItem('hotelUser',JSON.stringify(res.data));
    //     this.router.navigateByUrl('/dashboard')
    //   }
    // },error=>{

    // }
  //)
  }
}

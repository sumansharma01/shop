import { HttpClient } from '@angular/common/http';
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { IUser } from './user';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userData=[
    
  ]
  constructor(private http:HttpClient) { }
  getAllUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>("http://localhost:3000/users");
  }
 getLength():any{
   this.http.get<IUser[]>("http://localhost:3000/users").subscribe((data)=>{
   console.log(data.length)  
   return data.length});
 }

 getUserById(id:number):Observable<IUser[]>{
  return this.http.get<IUser[]>(`http://localhost:3000/users/${id}`);
}
 

  addUser(dataObject:any){
    dataObject.id=this.getLength()+1;
    console.log("dataid=",dataObject.id);
    this.http.post("http://localhost:3000/users",dataObject).subscribe(r=>{});
  }

  deleteUsersById(id:any){
    this.http.delete(`http://localhost:3000/users/${id}`).subscribe(r=>{console.log("deleted user "+id)});
  }

  editUser(dataObject:object,id:number){
    console.log("dataObject=",dataObject);
    this.http.put(`http://localhost:3000/users/${id}`,dataObject).subscribe(r=>{});
  }
}

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
    return this.http.get<IUser[]>("https://sumanshop-api.herokuapp.com/users");
  }
 getLength():any{
   this.http.get<IUser[]>("https://sumanshop-api.herokuapp.com/users").subscribe((data)=>{
   console.log(data.length)  
   return data.length});
 }

 getUserById(id:number):Observable<IUser[]>{
  return this.http.get<IUser[]>(`https://sumanshop-api.herokuapp.com/users/${id}`);
}
 

  addUser(dataObject:any){
    dataObject.id=this.getLength()+1;
    console.log("dataid=",dataObject.id);
    this.http.post("https://sumanshop-api.herokuapp.com/users",dataObject).subscribe(r=>{});
  }

  deleteUsersById(id:any){
    this.http.delete(`https://sumanshop-api.herokuapp.com/users/${id}`).subscribe(r=>{console.log("deleted user "+id)});
  }

  editUser(dataObject:object,id:number){
    console.log("dataObject=",dataObject);
    this.http.put(`https://sumanshop-api.herokuapp.com/users/${id}`,dataObject).subscribe(r=>{});
  }
}

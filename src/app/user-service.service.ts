import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userData=[
    {
      id:1,
      username:"suman01",
      email:"suman@gmail.com",
      mobile:"1234567890",
      password:"idk###",
      confirmPassword:"idk###",
      country:"Nepal",
      state:"Bagmati",
      city:"Kathmandu",
      gender:"M",
      zipCode:"444444",
    },
    {
      id:2,
      username:"risu01",
      email:"risu@gmail.com",
      mobile:"9876544321",
      password:"iKnowEverything",
      confirmPassword:"iKnowEverything",
      country:"Nepal",
      state:"Bagmati",
      city:"Kathmandu",
      gender:"F",
      zipCode:"444444",
    },
    {
      id:3,
      username:"pujan01",
      email:"pujan@gmail.com",
      mobile:"5557778890",
      password:"howdy",
      confirmPassword:"howdy",
      country:"Nepal",
      state:"Bagmati",
      city:"Bhaktapur",
      gender:"M",
      zipCode:"444444",
    }
  ]
  constructor() { }
  getAllUsers():Array<object>{
    return this.userData;
  }
  getLength(){
    return this.userData.length;
  }

  deleteUsersById(id:any){
    let i:any=-1;
    for(let index=0;index<this.getLength();index++){
      if(this.userData[index].id==id){
        i=index;
        break;
      }
    }

    if(i!=-1)
      this.userData.splice(i,1);
  }

}

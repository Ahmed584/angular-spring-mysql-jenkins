import { Component, OnInit } from '@angular/core';

import{Router}  from '@angular/router';
import { User } from '../../modele/user';
import { UserService } from '../../shared-service/user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  private user:User;
  
  constructor(private userService:UserService , private _rotuer:Router) { }

  ngOnInit() {
    this.user=this.userService.getter();
  }



    processForm(){
      if(this.user.id==undefined){
         this.userService.createUser(this.user).subscribe((user)=>{
           console.log(user);
           this._rotuer.navigate(['/list']);
         },(error)=>{
           console.log(error);
         });
      }else{
         this.userService.updateUser(this.user).subscribe((user)=>{
           console.log(user);
           this._rotuer.navigate(['/list']);
         },(error)=>{
           console.log(error);
         });
      }
    }

}

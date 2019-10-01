import { Component, OnInit } from '@angular/core';
import{Router}  from '@angular/router';
import { User } from '../../modele/user';
import { UserService } from '../../shared-service/user.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  users: Array<User>;

  constructor(private userService :UserService , private _router:Router) { }

  ngOnInit() {
    this.userService.getAll().subscribe(data => {
      this.users = data;
    });

}

deleteUser(user){
  this.userService.deleteUser(user.id).subscribe((data)=>{
      this.users.splice(this.users.indexOf(user),1);
  },(error)=>{
    console.log(error);
  });
}


updateUser(user){  
  this.userService.setter(user);
  this._router.navigate(['/edit']);


}
newUser(){
let user = new User();
 this.userService.setter(user);
  this._router.navigate(['/edit']);

}


}

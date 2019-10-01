import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../modele/user';




@Injectable()
export class UserService {

  private baseUrl:string='http://192.168.1.207:8082';
  private user = new User();
  

  constructor(private _http:HttpClient) { }

  getAll(): Observable<any> {
    return this._http.get(this.baseUrl+'/users');
  }

  getUser(id:Number){

    return this._http.get(this.baseUrl+'/user/'+id);
  }

  deleteUser(id:Number){

    return this._http.delete(this.baseUrl+'/deleteUser/'+id);
  }


  createUser(user:User){

    return this._http.post<User>(this.baseUrl+'/user',user);
  }
   
   updateUser(user:User){

    return this._http.put(this.baseUrl+'/update',user);
  }

  setter(user:User){
    this.user=user;
  }

 getter(){
   return this.user;
 }
 
    }

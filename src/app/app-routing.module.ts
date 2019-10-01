import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserformComponent } from './components/userform/userform.component';
import { ListuserComponent } from './components/listuser/listuser.component';



const routes: Routes = [
  {path : '' , component : ListuserComponent },
  {path : 'list' , component : ListuserComponent },
  {path : 'edit' , component : UserformComponent }
  
  ];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

  
  })
export class AppRoutingModule { }

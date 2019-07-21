import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



const routs = RouterModule.forChild([
  { path :"auth", component:AuthComponent },
  {path : "main" ,component : AdminComponent },
  { path : "**" , redirectTo : "auth"}
]);

@NgModule({
  declarations: [AuthComponent, AdminComponent],
  imports: [
    CommonModule , FormsModule , routs
  ]
})
export class AdminModule { 

  
}

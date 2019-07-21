import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../model/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public username:string;
  public password : string;
  public errorMessage : string;

  constructor(private router:Router, private authService : AuthService) {

   }

  ngOnInit() {
  }

  authenticate(form : NgForm){
    if(form.valid) {
      // perform authentication
      this.authService.authenticate(this.username, this.password).subscribe(
        response => {
          if(response){
            this.router.navigateByUrl("/admin/main");
          }
          this.errorMessage = "Authentication Failed !!!"
        }
      );
    }
    else {
      this.errorMessage = "Form Data Invalid !";
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email!: string;
  password!: string;
  remind!: boolean;
  constructor(private authService: AuthService,private router:Router) {}
  login() {
    this.router.navigate(['dashboard']);
    // console.log(this.email,this.password);
    // if (this.email === '') {
    //   alert('Entrer votre Mail');
    // }
    // if (this.password === '') {
    //   alert('Entrer votre mot de passe');
    // }
    // this.authService.login(this.email, this.password);
    // this.email = '';
    // this.password = '';
  }
}

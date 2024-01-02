import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  email!: string;
  password!: string;
  confirmPassword!: string;
  constructor(private authService: AuthService) {}
  register() {
    if (this.email === '') {
      alert('Entrer votre Mail');
    }
    if (this.password === '') {
      alert('Entrer votre mot de passe');
    }
    if (this.confirmPassword === '') {
      alert('Entrer la confirmation');
    }
    this.authService.register(this.email, this.password);
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }
}

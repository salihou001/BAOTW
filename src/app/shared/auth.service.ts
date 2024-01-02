import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  // login method
  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        alert('Something went wrong');
        this.router.navigate(['/login']);
      }
    );
  }
  // register method
  register(email:string, password:string){
    this.fireAuth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert('Register Successfully');
      this.router.navigate(['/login']);
    }, error => {
      alert(error.message);
      this.router.navigate(['/register']);
    })
  }
  // logOUt
  logOut(){
    this.fireAuth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    },error => {
      alert(error.message);
    })
  }
}

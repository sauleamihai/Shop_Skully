import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HeaderService } from "../header.service";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit,OnDestroy{
  signUpObj: SignUpModel = new SignUpModel();
  confirmPassword: string = '';

  constructor(private router: Router, private navBarService: HeaderService) {}

  onRegister() {
    console.log('Password:', this.signUpObj.password);
    console.log('Confirm Password:', this.confirmPassword);

    if (!this.signUpObj.name || !this.signUpObj.email || !this.signUpObj.password) {
      alert('All fields are required!');
      return;
    }

    if (!this.validateEmail(this.signUpObj.email)) {
      alert('Invalid email format!');
      return;
    }

    if (this.signUpObj.password.length < 6) {
      alert('Password must be at least 6 characters long!');
      return;
    }

    if (this.signUpObj.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const localUsers = localStorage.getItem('angular_users');

    if (localUsers !== null) {
      const users = JSON.parse(localUsers);
      users.push(this.signUpObj);
      localStorage.setItem('angular_users', JSON.stringify(users));
    } else {
      const users = [this.signUpObj];
      localStorage.setItem('angular_users', JSON.stringify(users));
    }

    alert('Registration successful!');
    this.router.navigateByUrl('/');
  }

  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  ngOnInit() {
    this.navBarService.hide();
  }

  ngOnDestroy() {
    this.navBarService.display();
  }
}

export class SignUpModel {
  name: string;
  email: string;
  password: string;

  constructor() {
    this.name = '';
    this.email = '';
    this.password = '';
  }
}

export class LogInModel {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}

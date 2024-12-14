import { Component } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  // Mock authentication function
  login() {
    if (this.username === 'admin' && this.password === 'password') {
      alert('Login successful');
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}

import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
import { UserServiceService } from '../services/user-service.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  password: string = '';
  showPassword: boolean = false; // Initially set to true
  showText: string = 'Show'; // Initial text for the link
  inputEmail: string = '';
  inputPassword: string = '';

  constructor(private router: Router, public userservice: UserServiceService) {}

  async login() {
    try{
      console.log(this.inputEmail, this.inputPassword )
    let user = await this.userservice.finduser(this.inputEmail, this.inputPassword)

    if(!user){
      alert("you entered wrong email or password!");
    }else {
      user = null;
      this.router.navigate(['/']); // Replace '/home' with your actual home page route
    }
    }catch(err) {
      console.log(err)
    }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    if (this.showPassword == true) {
      this.showText = 'Hide'
    } else {
      this.showText = 'Show'
    }
  }
}

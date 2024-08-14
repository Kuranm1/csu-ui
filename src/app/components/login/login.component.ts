import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  userisManger: boolean = false;
  constructor(private authService: AuthService, private router: Router) {
    if(authService.isLoggedIn()) this.router.navigate(['/']);
  }

  ngOnInit(){
  }
  
  login() {
      this.authService.login(this.username, this.password).subscribe(
          data => {
            console.log(data);
            let isManger = data.roles.find((role: any) => role.name === "MANGER") !== undefined;
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('isManger',  isManger.toString());
            window.location.reload();
          },
          error => {
            console.log(error);
            alert('Login failed');
          }
      );
  }
}

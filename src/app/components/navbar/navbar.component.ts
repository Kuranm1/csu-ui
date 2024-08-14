import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router){
  }

  ngOnInit(): void{
    this.userLoggedIn = this.authService.isLoggedIn(); 
  }

  logout(event: Event){
    event.preventDefault();
    this.authService.logout().subscribe(
      data => { 
        this.userLoggedIn = false;
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('isManger');
        this.router.navigate(['/login']);
      },
      error => {}
  );
  
  }
}

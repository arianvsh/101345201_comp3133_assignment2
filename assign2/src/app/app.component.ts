import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '101345201_comp3133_assignment2';

  constructor(public authService: AuthService, private router: Router) {
    console.log({authService});
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit  {
  

  private router = inject(Router);
  public loginService = inject(LoginService);

  ngOnInit(): void {
    console.log(this.loginService.rolesName);
  }


  deconnexion() {
    this.router.navigateByUrl('login');
  }

  goToHomePage() {
    this.router.navigateByUrl('home');
    }
  
}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string | null = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.username = this.authService.getUsername();
  }
  onLoginClick(): void {
    this.router.navigate(['datoscliente']);
  }

  onLoginClick2(): void{
    localStorage.removeItem('username');
    localStorage.removeItem('codigodepago');
    localStorage.removeItem('authToken');
    this.router.navigate(['login']);
  }

}

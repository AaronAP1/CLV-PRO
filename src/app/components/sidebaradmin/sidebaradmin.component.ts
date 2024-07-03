import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidebaradmin',
  templateUrl: './sidebaradmin.component.html',
  styleUrls: ['./sidebaradmin.component.css']
})
export class SidebaradminComponent {

  constructor(private authService: AuthService, private router: Router) { }

  buscar(): void {
    let url = this.router.serializeUrl(this.router.createUrlTree(['busquedapriv']));
    window.open(url, '_blank');
  }

  onLoginClick2(): void {
    this.authService.logout();
    this.router.navigate(['/landing']);
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { PagosComponent } from './views/pagos/pagos.component';
import { PagoRealizadoComponent } from './views/pago-realizado/pago-realizado.component';
import { DatosclienteComponent } from './views/datoscliente/datoscliente.component';
import { DatoscontratoComponent } from './views/datoscontrato/datoscontrato.component';
import { LandingComponent } from './views/paginaprincipal/landing/landing.component';
import { AuthGuard } from './auth/auth.guard';
import { PrincipalComponent } from './views/principal/principal.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'pagos', component: PagosComponent, canActivate: [AuthGuard] },
  { path: 'pago-realizado', component: PagoRealizadoComponent, canActivate: [AuthGuard] },
  { path: 'datoscliente', component: DatosclienteComponent, canActivate: [AuthGuard] },
  { path: 'datoscontrato', component: DatoscontratoComponent, canActivate: [AuthGuard] },
  { path: 'principal', component: PrincipalComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { PagosComponent } from './views/pagos/pagos.component';
import { PagoRealizadoComponent } from './views/pago-realizado/pago-realizado.component';
import { DatosclienteComponent } from './views/datoscliente/datoscliente.component';
import { DatoscontratoComponent } from './views/datoscontrato/datoscontrato.component';
import { LandingComponent } from './views/paginaprincipal/landing/landing.component';

const routes: Routes = [

  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pagos', component: PagosComponent },
  { path: 'pago-realizado', component: PagoRealizadoComponent },
  { path: 'datoscliente', component: DatosclienteComponent },
  { path: 'datoscontrato', component: DatoscontratoComponent },
  { path: '', redirectTo: '/pagos', pathMatch: 'full' } // Ruta predeterminada


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
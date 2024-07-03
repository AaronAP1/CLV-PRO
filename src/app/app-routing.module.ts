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
import { PrincipaladminComponent } from './viewsA/principaladmin/principaladmin.component';
import { UsuariosComponent } from './viewsA/usuarios/usuarios.component';
import { TrabajadorComponent } from './viewsA/trabajador/trabajador.component';
import { RecaudacionesadminComponent } from './viewsA/recaudacionesadmin/recaudacionesadmin.component';
import { CobrosadminComponent } from './viewsA/cobrosadmin/cobrosadmin.component';
import { EditarusuarioComponent } from './viewsA/editarusuario/editarusuario.component';
import { DataprincipalComponent } from './viewsA/dataprincipal/dataprincipal.component';
import { BusquedaADMINComponent } from './viewsA/busqueda-admin/busqueda-admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'pagos', component: PagosComponent, canActivate: [AuthGuard] },
  { path: 'pago-realizado', component: PagoRealizadoComponent, canActivate: [AuthGuard] },
  { path: 'datoscliente', component: DatosclienteComponent, canActivate: [AuthGuard] },
  { path: 'datoscontrato', component: DatoscontratoComponent, canActivate: [AuthGuard] },
  { path: 'principal', component: PrincipalComponent, canActivate: [AuthGuard]},
  { path: 'principaladmin', component: PrincipaladminComponent, canActivate: [AuthGuard]},
  { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard]},
  { path: 'trabajador', component: TrabajadorComponent, canActivate: [AuthGuard]},
  { path: 'recaudaciones', component: RecaudacionesadminComponent, canActivate: [AuthGuard]},
  { path: 'cobros', component: CobrosadminComponent, canActivate: [AuthGuard]},
  { path: 'editarusuario', component: EditarusuarioComponent, canActivate: [AuthGuard]},
  { path: 'dataprincipal', component: DataprincipalComponent, canActivate: [AuthGuard]},
  { path: 'busquedapriv', component: BusquedaADMINComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

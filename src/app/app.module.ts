import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PagosComponent } from './views/pagos/pagos.component';
import { PagoRealizadoComponent } from './views/pago-realizado/pago-realizado.component';
import { HeaderComponent } from './components/header/header.component';
import { DatosclienteComponent } from './views/datoscliente/datoscliente.component';
import { Sidebar2Component } from './components/sidebar2/sidebar2.component';
import { DatoscontratoComponent } from './views/datoscontrato/datoscontrato.component';
import { FooterComponent } from './views/paginaprincipal/footer/footer.component';
import { MainComponent } from './views/paginaprincipal/main/main.component';
import { NavbarComponent } from './views/paginaprincipal/navbar/navbar.component';
import { LandingComponent } from './views/paginaprincipal/landing/landing.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponent } from './views/principal/principal.component';
import { HeaderadminComponent } from './components/headeradmin/headeradmin.component';
import { SidebaradminComponent } from './components/sidebaradmin/sidebaradmin.component';
import { UsuariosComponent } from './viewsA/usuarios/usuarios.component';
import { DataprincipalComponent } from './viewsA/dataprincipal/dataprincipal.component';
import { PrincipaladminComponent } from './viewsA/principaladmin/principaladmin.component';
import { TrabajadorComponent } from './viewsA/trabajador/trabajador.component';
import { CobrosadminComponent } from './viewsA/cobrosadmin/cobrosadmin.component';
import { RecaudacionesadminComponent } from './viewsA/recaudacionesadmin/recaudacionesadmin.component';
import { EditarusuarioComponent } from './viewsA/editarusuario/editarusuario.component';
import { DetallesModalComponent } from './viewsA/detalles-modal/detalles-modal.component';
import { CrearModalCobrosComponent } from './viewsA/crear-modal-cobros/crear-modal-cobros.component';
import { DetallesModalRecaudacionesComponent } from './viewsA/detalles-modal-recaudaciones/detalles-modal-recaudaciones.component';
import { DetallesModalPrincipalComponent } from './viewsA/detalles-modal-principal/detalles-modal-principal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SidebarComponent,
    PagosComponent,
    PagoRealizadoComponent,
    HeaderComponent,
    DatosclienteComponent,
    Sidebar2Component,
    DatoscontratoComponent,
    FooterComponent,
    MainComponent,
    NavbarComponent,
    LandingComponent,
    PrincipalComponent,
    HeaderadminComponent,
    SidebaradminComponent,
    UsuariosComponent,
    DataprincipalComponent,
    PrincipaladminComponent,
    TrabajadorComponent,
    CobrosadminComponent,
    RecaudacionesadminComponent,
    EditarusuarioComponent,
    DetallesModalComponent,
    CrearModalCobrosComponent,
    DetallesModalRecaudacionesComponent,
    DetallesModalPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

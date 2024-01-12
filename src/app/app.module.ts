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
    DatoscontratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

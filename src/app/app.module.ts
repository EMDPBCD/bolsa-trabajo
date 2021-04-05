import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BPrincipalComponent } from './componentes/bolsa-de-trabajo/b-principal/b-principal.component';
import { EPrincipalComponent } from './componentes/enmidirectorio/e-principal/e-principal.component';
import { InformacionOfertaComponent } from './componentes/bolsa-de-trabajo/informacion-oferta/informacion-oferta.component';
import { EEmpresaInformacionComponent } from './componentes/enmidirectorio/e-empresa-informacion/e-empresa-informacion.component';  
@NgModule({
  declarations: [
    AppComponent,
    BPrincipalComponent,
    EPrincipalComponent,
    InformacionOfertaComponent,
    EEmpresaInformacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

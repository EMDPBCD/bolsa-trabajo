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
import { EBuscadorComponent } from './componentes/enmidirectorio/e-buscador/e-buscador.component';
import { NoticiasPrincipalComponent } from './componentes/noticias/principal/noticias.component';
import { NInformacionCompletaComponent } from './componentes/noticias/n-informacion-completa/n-informacion-completa.component';
import { CandidatoComponent } from './componentes/bolsa-de-trabajo/candidato/candidato.component';
import { ListarCandidatosComponent } from './componentes/bolsa-de-trabajo/listar-candidatos/listar-candidatos.component';
import { AspirantesComponent } from './componentes/bolsa-de-trabajo/aspirantes/aspirantes.component';
import { OfertasAspirantesComponent } from './componentes/bolsa-de-trabajo/ofertas-aspirantes/ofertas-aspirantes.component';

@NgModule({
  declarations: [
    AppComponent,
    BPrincipalComponent,
    EPrincipalComponent,
    InformacionOfertaComponent,
    EEmpresaInformacionComponent,
    EBuscadorComponent,
    NoticiasPrincipalComponent,
    NInformacionCompletaComponent,
    CandidatoComponent,
    ListarCandidatosComponent,
    AspirantesComponent,
    OfertasAspirantesComponent,
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

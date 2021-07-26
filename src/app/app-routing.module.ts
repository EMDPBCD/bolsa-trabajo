import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { BPrincipalComponent } from './componentes/bolsa-de-trabajo/b-principal/b-principal.component'
import { InformacionOfertaComponent} from './componentes/bolsa-de-trabajo/informacion-oferta/informacion-oferta.component'
import { EPrincipalComponent } from './componentes/enmidirectorio/e-principal/e-principal.component';
import { EEmpresaInformacionComponent } from './componentes/enmidirectorio/e-empresa-informacion/e-empresa-informacion.component';
import { NoticiasPrincipalComponent } from './componentes/noticias/principal/noticias.component';
import { NInformacionCompletaComponent } from './componentes/noticias/n-informacion-completa/n-informacion-completa.component';
import { CandidatoComponent } from './componentes/bolsa-de-trabajo/candidato/candidato.component'
import { ListarCandidatosComponent } from './componentes/bolsa-de-trabajo/listar-candidatos/listar-candidatos.component'
import { AspirantesComponent} from './componentes/bolsa-de-trabajo/aspirantes/aspirantes.component';
import { OfertasAspirantesComponent} from './componentes/bolsa-de-trabajo/ofertas-aspirantes/ofertas-aspirantes.component';


const routes: Routes = [
  //Bolsa de trabajo
  {path: '', component: BPrincipalComponent},
  {path: 'informacion-oferta/:oferta', component: InformacionOfertaComponent},
  {path: 'candidato', component: CandidatoComponent},
  {path: 'listar-candidatos', component: ListarCandidatosComponent},
  {path: 'registro-aspirantes', component:AspirantesComponent},
  {path: 'ofertas-aspirantes',component:OfertasAspirantesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

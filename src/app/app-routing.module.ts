import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { BPrincipalComponent } from './componentes/bolsa-de-trabajo/b-principal/b-principal.component'
import { InformacionOfertaComponent} from './componentes/bolsa-de-trabajo/informacion-oferta/informacion-oferta.component'
import { EPrincipalComponent } from './componentes/enmidirectorio/e-principal/e-principal.component';
import { EEmpresaInformacionComponent } from './componentes/enmidirectorio/e-empresa-informacion/e-empresa-informacion.component';
import { NoticiasPrincipalComponent } from './componentes/noticias/principal/noticias.component';
import { NInformacionCompletaComponent } from './componentes/noticias/n-informacion-completa/n-informacion-completa.component';


const routes: Routes = [
  //Bolsa de trabajo
  {path: '', component: BPrincipalComponent},
  {path: 'informacion-oferta/:oferta', component: InformacionOfertaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

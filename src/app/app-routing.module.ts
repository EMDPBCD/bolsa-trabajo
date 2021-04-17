import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { BPrincipalComponent } from './componentes/bolsa-de-trabajo/b-principal/b-principal.component'
import { InformacionOfertaComponent} from './componentes/bolsa-de-trabajo/informacion-oferta/informacion-oferta.component'
import { EPrincipalComponent } from './componentes/enmidirectorio/e-principal/e-principal.component';
import { EEmpresaInformacionComponent } from './componentes/enmidirectorio/e-empresa-informacion/e-empresa-informacion.component';
import { NPrincipalComponent } from './componentes/noticiero/n-principal/n-principal/n-principal.component';

const routes: Routes = [
  {path: 'bolsa-de-trabajo', component: BPrincipalComponent},
  {path: 'informacion-oferta/:oferta', component: InformacionOfertaComponent},
  {path: 'enmidirectorio', component: EPrincipalComponent},
  {path: 'enmidirectorio/informacion/empresa/:id', component: EEmpresaInformacionComponent},
  {path: 'noticias', component: NPrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

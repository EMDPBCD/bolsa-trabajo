import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { BPrincipalComponent } from './componentes/bolsa-de-trabajo/b-principal/b-principal.component'
import {InformacionOfertaComponent} from './Componentes/informacionOferta/informacion-oferta/informacion-oferta.component'

const routes: Routes = [
  {path: '', component: BPrincipalComponent},
  {path: 'informacion-oferta', component: InformacionOfertaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

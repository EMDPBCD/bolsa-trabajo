import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BolsaTrabajoComponent} from './Componentes/bolsa-trabajo/bolsa-trabajo.component';

const routes: Routes = [
  {path:'', component: BolsaTrabajoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

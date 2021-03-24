import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BolsaTrabajoComponent} from './Componentes/bolsa-trabajo/bolsa-trabajo.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path:'bolsa-de-trabajo', component: BolsaTrabajoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { BPrincipalComponent } from './componentes/bolsa-de-trabajo/b-principal/b-principal.component'

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'bolsa-de-trabajo', component: BPrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

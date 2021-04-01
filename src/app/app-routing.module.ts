import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { BPrincipalComponent } from './componentes/bolsa-de-trabajo/b-principal/b-principal.component'
import { EPrincipalComponent } from './componentes/enmidirectorio/e-principal/e-principal.component';
const routes: Routes = [
  {path: 'bolsa-de-trabajo', component: BPrincipalComponent},
  {path: 'enmidirectorio', component: EPrincipalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

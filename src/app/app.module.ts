import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BolsaTrabajoComponent } from './Componentes/bolsa-trabajo/bolsa-trabajo.component';

@NgModule({
  declarations: [
    AppComponent,
    BolsaTrabajoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

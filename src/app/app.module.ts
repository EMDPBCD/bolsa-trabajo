import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BolsaTrabajoComponent } from './Componentes/bolsa-trabajo/bolsa-trabajo.component';
import { FormsModule } from '@angular/forms';  
@NgModule({
  declarations: [
    AppComponent,
    BolsaTrabajoComponent,
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

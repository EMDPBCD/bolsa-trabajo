import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BPrincipalComponent } from './componentes/bolsa-de-trabajo/b-principal/b-principal.component';
import { EPrincipalComponent } from './componentes/enmidirectorio/e-principal/e-principal.component';  
@NgModule({
  declarations: [
    AppComponent,
    BPrincipalComponent,
    EPrincipalComponent,
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

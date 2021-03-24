import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hoy-en-laredo';
  ofertas: any[];
  categorias: any[];
  categoriaSeleccionada;

  constructor(private http: HttpClient){}

  ngOnInit()
  {
    this.buscarCategorias();
  }

  buscarOfertas()
  {
    console.log(this.categoriaSeleccionada);
    this.ofertas = new Array;
    this.http.get<any>('http://ticketstalamas.com/hoy-en-laredo-backend/src/api.php/bolsa-de-trabajo/' + this.categoriaSeleccionada).subscribe(data => {
        for(let i = 0; i < data.length; i++)
        {
          this.ofertas.push(data[i]);
        }
        console.log(this.ofertas);
    })    
  }

  buscarCategorias()
  {
    this.categorias = new Array;
    this.http.get<any>('http://ticketstalamas.com/hoy-en-laredo-backend/src/api.php/categorias-bolsa-de-trabajo').subscribe(data => {
        for(let i = 0; i < data.length; i++)
        {
          this.categorias.push(data[i]);
        }
        alert(JSON.stringify(this.categorias));
    })    
  }
}

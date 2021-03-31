import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router'; 

@Component({
  selector: 'app-b-principal',
  templateUrl: './b-principal.component.html',
  styleUrls: ['./b-principal.component.css']
})
export class BPrincipalComponent 
{
  title = 'hoy-en-laredo';
  ofertas: any[];
  categorias: any[];
  categoriaSeleccionada;

  constructor(private http: HttpClient, private router: Router){}

  ngOnInit()
  {
    this.buscarCategorias();
  }

  buscarOfertas()
  {
    console.log(this.categoriaSeleccionada);
    this.ofertas = new Array;
    this.http.get<any>('http://ticketstalamas.com/hoy-en-laredo-backend/src/api.php/bolsa-de-trabajo/ofertas/' + this.categoriaSeleccionada).subscribe(data => {
        for(let i = 0; i < data.length; i++)
        {
          this.ofertas.push(data[i]);
        }
    })    
  }

  navegarOfertas()
  {
    this.router.navigate(['informacion-oferta']);
  }

  buscarCategorias()
  {
    this.categorias = new Array;
    this.http.get<any>('http://ticketstalamas.com/hoy-en-laredo-backend/src/api.php/bolsa-de-trabajo/categorias').subscribe(data => {
        for(let i = 0; i < data.length; i++)
        {
          this.categorias.push(data[i]);
        }
    })    
  }

}

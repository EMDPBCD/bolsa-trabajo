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
  categoriaSeleccionada;
  ofertas: any[];
  categorias: any[];
  banners: any[];

  constructor(private http: HttpClient, private router: Router){}

  ngOnInit()
  {
    this.obtenerBanners()
    this.buscarCategorias();
    this.todasLasOfertas();
  }

  obtenerBanners()
  {
    this.banners = new Array();
    this.http
      .get<any>
      (
        'http://tiendatalamas.com/bolsa/src/api.php/bolsa-de-trabajo/banners'
      )
      .subscribe((data) =>
      {
        for (let i = 0; i < data.length; i++) {
          this.banners.push(data[i]);
        }
        console.log(this.banners);
      });
  }

  buscarOfertas()
  {
    console.log(this.categoriaSeleccionada);
    this.ofertas = new Array;
    this.http.get<any>('http://tiendatalamas.com/bolsa/src/api.php/bolsa-de-trabajo/ofertas/' + this.categoriaSeleccionada).subscribe(data => {
        for(let i = 0; i < data.length; i++)
        {
          this.ofertas.push(data[i]);
        }
        console.log(this.ofertas);
    })
  }

  todasLasOfertas()
  {
    this.ofertas = new Array;
    this.http.get<any>('http://tiendatalamas.com/bolsa/src/api.php/bolsa-de-trabajo/ofertas/').subscribe(data => {
        for(let i = 0; i < data.length; i++)
        {
          this.ofertas.push(data[i]);
        }
        console.log(this.ofertas);
    })
  }

  navegarOfertas()
  {
    this.router.navigate(['informacion-oferta']);
  }

  buscarCategorias()
  {
    this.categorias = new Array;
    this.http.get<any>('http://tiendatalamas.com/bolsa/src/api.php/bolsa-de-trabajo/categorias').subscribe(data => {
        for(let i = 0; i < data.length; i++)
        {
          this.categorias.push(data[i]);
        }
        console.log(this.categorias);
    })
  }

}

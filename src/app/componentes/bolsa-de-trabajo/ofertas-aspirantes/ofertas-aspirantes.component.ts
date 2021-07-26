import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-ofertas-aspirantes',
  templateUrl: './ofertas-aspirantes.component.html',
  styleUrls: ['./ofertas-aspirantes.component.css']
})
export class OfertasAspirantesComponent implements OnInit {

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
    this.http.get<any>('http://tiendatalamas.com/bolsa/src/api.php/bolsa-de-trabajo/ofertas/' + 1).subscribe(data => {
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
    this.http.get<any>('http://tiendatalamas.com/bolsa/src/api.php/bolsa-de-trabajo/ofertas-aspirantes').subscribe(data => {
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
    this.http.get<any>('http://tiendatalamas.com/bolsa/src/api.php/bolsa-de-trabajo/categorias-aspirantes').subscribe(data => {
        for(let i = 0; i < data.length; i++)
        {
          this.categorias.push(data[i]);
        }
        console.log(this.categorias);
    })
  }

}

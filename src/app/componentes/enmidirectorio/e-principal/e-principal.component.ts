import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-e-principal',
  templateUrl: './e-principal.component.html',
  styleUrls: ['./e-principal.component.css']
})
export class EPrincipalComponent {
  banners: any[];
  categorias: any[];
  empresas: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() 
  {
    this.obtenerBanners();
    this.obtenerCategorias();
    this.obtenerEmpresas();
  }

  obtenerBanners()
  {
    this.banners = new Array;
    this.http.get<any>('http://localhost:80/hoy-en-laredo/src/api.php/enmidirectorio/banners').subscribe(data => {
        for(let i = 0; i < data.length; i++)
        {
          this.banners.push(data[i]);
        }
    }) 
  }

  obtenerCategorias()
  {
    this.categorias = new Array;
    this.http.get<any>('http://localhost:80/hoy-en-laredo/src/api.php/enmidirectorio/categorias').subscribe(data => {
        this.categorias = data;
    })
  }

  obtenerEmpresas()
  {
    this.empresas = new Array;
    this.http.get<any>('http://localhost:80/hoy-en-laredo/src/api.php/enmidirectorio/empresas').subscribe(data => {
        Object.entries(data).forEach(
          ([key, value]) => {
            let nombreEmpresa = key
            let descripcion = value["descripcion"]
            let logotipo = value["logotipo"]
            let sucursales = [];
            Object.entries(value["sucursales"]).forEach(
              ([keySucursales, valueSucursales]) => 
              {
                sucursales.push({"sucursal": [keySucursales], "correo": valueSucursales["correo"]})
              }
            )
            this.empresas.push({
              nombreEmpresa: nombreEmpresa,
              descripcion: descripcion,
              logotipo: logotipo,
              sucursales: sucursales
            })
          }
        );
    })
  }
}

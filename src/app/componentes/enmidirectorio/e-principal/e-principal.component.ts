import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-e-principal',
  templateUrl: './e-principal.component.html',
  styleUrls: ['./e-principal.component.css']
})
export class EPrincipalComponent {
  banners: any[];
  categorias: any;
  empresas: any[];

  constructor(private http: HttpClient, private route:ActivatedRoute, private router: Router) { }

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
    this.http.get<any>('http://ticketstalamas.com/hoy-en-laredo-backend/src/api.php/enmidirectorio/categorias').subscribe(data => {
        Object.entries(data).forEach(
          ([key, value]) => {
            let subCategorias = [];      
            Object.entries(value).forEach(
              ([key, value]) => {
                  subCategorias.push(value)
              }
            )
           this.categorias.push({categoria: key, subCategoria: subCategorias})
          }
        );
    })
  }

  obtenerEmpresas()
  {
    this.empresas = new Array;
    this.http.get<any>('http://ticketstalamas.com/hoy-en-laredo-backend/src/api.php/enmidirectorio/empresas').subscribe(data => {
        Object.entries(data).forEach(
          ([key, value]) => {
            let nombreEmpresa = key
            let id = value["id"];
            let descripcion = value["descripcion"]
            let logotipo = value["logotipo"]
            this.empresas.push({
              id: id,
              nombreEmpresa: nombreEmpresa,
              descripcion: descripcion,
              logotipo: logotipo
            
            })
          }
        );
    })
  }

  verMas(id)
  {
    this.router.navigate(['informacion/empresa', id],  {relativeTo: this.route});
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-e-principal',
  templateUrl: './e-principal.component.html',
  styleUrls: ['./e-principal.component.css'],
})
export class EPrincipalComponent {
  banners: any[];
  categorias: any;
  empresas: any[];
  botonBuscarDeshabilitado: boolean = false;
  botonBuscarTexto: string = 'Buscar';
  mostrarNoSeEncontraronEmpresas: boolean = false;
  selectedIndex;
  numeroDePaginas = [];
  constructor
  (
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() 
  {
    this.numeroDePaginas = new Array();
    this.numeroDePaginas.push(0);
    this.numeroDePaginas.push(1);
    this.numeroDePaginas.push(2);
    this.numeroDePaginas.push(3);
    this.numeroDePaginas.push(4);
    this.numeroDePaginas.push(5);
    this.obtenerBanners();
    this.obtenerCategorias();
    this.obtenerEmpresas();
  }

  obtenerBanners() 
  {
    this.banners = new Array();
    this.http
      .get<any>
      (
        'http://ticketstalamas.com/hoy-en-laredo-backend/src/api.php/enmidirectorio/banners'
      )
      .subscribe((data) => 
      {
        for (let i = 0; i < data.length; i++) {
          this.banners.push(data[i]);
        }
      });
  }

  obtenerCategorias() 
  {
    this.categorias = new Array();
    this.http
      .get<any>
      (
        'http://ticketstalamas.com/hoy-en-laredo-backend/src/api.php/enmidirectorio/categorias'
      )
      .subscribe((data) => {
        Object.entries(data).forEach(([key, value]) => 
        {
          let subCategorias = [];
          Object.entries(value).forEach(([key, value]) => 
          {
            subCategorias.push(value);
          });
          this.categorias.push({ categoria: key, subCategoria: subCategorias });
        });
      });
  }

  obtenerEmpresas() 
  {
    this.empresas = new Array();
    this.http
      .get<any>(
        'http://ticketstalamas.com/hoy-en-laredo-backend/src/api.php/enmidirectorio/empresas'
      )
      .subscribe((data) => 
      {
        Object.entries(data).forEach(([key, value]) => 
        {
          let nombreEmpresa = key;
          let id = value['id'];
          let descripcion = value['descripcion'];
          let logotipo = value['logotipo'];
          this.empresas.push({
            id: id,
            nombreEmpresa: nombreEmpresa,
            descripcion: descripcion,
            logotipo: logotipo,
          });
        });
      });
  }

  buscarEmpresas(busqueda, index) 
  {
    this.selectedIndex = index;

    this.botonBuscarDeshabilitado = true;
    this.botonBuscarTexto = 'Buscando...';
    this.empresas = new Array();
    this.http
      .get<any>
      (
        'http://ticketstalamas.com/hoy-en-laredo-backend/src/api.php/enmidirectorio/buscador/' +
          busqueda
      )
      .subscribe((data) => 
      {
        if (JSON.stringify(data) === '[]') 
        {
          this.mostrarNoSeEncontraronEmpresas = true;
        } 
        else 
        {
          this.mostrarNoSeEncontraronEmpresas = false;
          Object.entries(data).forEach(([key, value]) => 
          {
            let nombreEmpresa = key;
            let id = value['id'];
            let descripcion = value['descripcion'];
            let logotipo = value['logotipo'];
            this.empresas.push({
              id: id,
              nombreEmpresa: nombreEmpresa,
              descripcion: descripcion,
              logotipo: logotipo,
            });
          });
        }
        this.botonBuscarDeshabilitado = false;
        this.botonBuscarTexto = 'Buscar';
      });
  }

  verMas(id) {
    this.router.navigate(['informacion/empresa', id], 
    {
      relativeTo: this.route,
    });
  }

  obtenerNoticiasPorNumeroDePagina(numeroDePagina, index)
  {
    this.selectedIndex = index;
    this.numeroDePaginas = new Array();
    this.numeroDePaginas.push(0);
    this.numeroDePaginas.push(1);
    this.numeroDePaginas.push(2);
    this.numeroDePaginas.push(3);
    this.numeroDePaginas.push(4);
    this.numeroDePaginas.push(5);
      this.empresas = new Array();
      this.http
        .get<any>
        (
          'http://localhost/hoy-en-laredo/src/api.php/enmidirectorio/empresas/pagina/' + numeroDePagina
        )
        .subscribe((data) => 
        {
          for (let i = 0; i < data.length; i++) {
            this.empresas.push(data[i]);
          }
          //alert(JSON.stringify(data));
        });
  }
}

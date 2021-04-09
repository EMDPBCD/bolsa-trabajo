import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-e-buscador',
  templateUrl: './e-buscador.component.html',
  styleUrls: ['./e-buscador.component.css']
})
export class EBuscadorComponent 
{
  empresas: any[];
  botonBuscarDeshabilitado: boolean = false;
  botonBuscarTexto: string = 'Buscar';
  mostrarNoSeEncontraronEmpresas: boolean = false;
  
  constructor
  (
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() 
  {

  }

  buscarEmpresas(busqueda) 
  {
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

}

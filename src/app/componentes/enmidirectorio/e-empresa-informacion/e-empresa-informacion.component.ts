import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-e-empresa-informacion',
  templateUrl: './e-empresa-informacion.component.html',
  styleUrls: ['./e-empresa-informacion.component.css']
})
export class EEmpresaInformacionComponent {
  informacionEmpresa: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() 
  {
    this.informacionEmpresa = new Array;
    let id = this.route.snapshot.paramMap.get('id')
    this.http.get<any>('http://ticketstalamas.com/hoy-en-laredo-backend/src/api.php/enmidirectorio/empresas/' + id).subscribe(data => 
    {
      Object.entries(data).forEach(
        ([key, value]) => {
          let nombreEmpresa = key;
          let descripcion = value["descripcion"];
          let logotipo = value["logotipo"];
          let categoria = value["categoria"];
          let subCategoria = value["sub_categoria"];
          let sucursales = [];
          let imagenes = [];
          Object.entries(value["sucursales"]).forEach(
            ([keySucursales, valueSucursales]) => 
            {
              sucursales.push(
                {
                  "sucursal": [keySucursales], "telefono": valueSucursales["telefono"],"correo": valueSucursales["correo"], horario: valueSucursales["horario"]
                }
              )
            }
          )
          Object.entries(value["imagenes"]).forEach(
            ([key, value]) => 
            {
              imagenes.push(
                {
                  "imagen": value
                }
              )
            }
          )
          this.informacionEmpresa.push({
            nombreEmpresa: nombreEmpresa,
            descripcion: descripcion,
            logotipo: logotipo,
            categoria: categoria,
            subCategoria: subCategoria,
            sucursales: sucursales,
            imagenes: imagenes
          })
        }
      );
    }) 
    console.log(this.informacionEmpresa)
  }
}


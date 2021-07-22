import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-informacion-oferta',
  templateUrl: './informacion-oferta.component.html',
  styleUrls: ['./informacion-oferta.component.css']
})
export class InformacionOfertaComponent implements OnInit {

  constructor(private _route:ActivatedRoute, private http: HttpClient) { }

  idOferta:string;
  empresa:any;
  ocultar:boolean = false;
  nombre:string;
  apellido:string;
  direccion:string;
  formacion:string;
  telefono:string;
  correo:string;
  experiencia:string;
  @ViewChild('filterName') redel:ElementRef;

  ngOnInit(): void {
    this.idOferta = this._route.snapshot.paramMap.get('oferta');
    this.obtenerEmpresa();
  }

  limpiarFormulario(){
    this.nombre ="";
    this.apellido="";
    this.direccion="";
    this.formacion="";
    this.telefono="";
    this.correo="";
    this.experiencia="";

  }

  obtenerEmpresa(){
    this.empresa = new Array;
    let informacionEmpresa = [];
    this.http.get<any>('http://tiendatalamas.com/bolsa/src/api.php/bolsa-de-trabajo/oferta/'+this.idOferta).subscribe(data => {
          Object.entries(data).forEach(
            ([key,value]) => {
              this.idOferta = key;
              let beneficios = [];

              console.log(value);

              Object.entries(value['beneficios']).forEach(
                ([keyBeneficios,valueBeneficios]) => {
                  beneficios.push(valueBeneficios);
                }
              )

              this.empresa.push(
                {
                  oferta_id: key,
                  puesto: value["puesto"],
                  salario: value["salario"],
                  empresa_direccion: value["empresa_direccion"],
                  empresa_logo: value["empresa_logo"],
                  descripcion: value["descripcion"],
                  imagen_uno: value["imagen_uno"],
                  imagen_dos: value["imagen_dos"],
                  imagen_tres: value["imagen_tres"],
                  diferencia_dias: value["diferencia_dias"],
                  beneficios: beneficios
              })
            }
          )
          console.log(this.empresa)
          //his.empresa.push(data);

    })
  }

  enviarSolicitud(data)
  {
    this.ocultar = true;
    console.log(data.nombre);
    console.log(data.apellidos);
    console.log(data.direccion);
    console.log(data.formacion);
    console.log(data.telefono);
    console.log(data.correo);
    console.log(data.experiencia);
    console.log(this.idOferta);



    this.http.post<any>('http://tiendatalamas.com/bolsa/  src/api.php/bolsa-de-trabajo/aspirantes',
    {
      id: 8,
      nombre: data.nombre,
      apellido: data.apellidos,
      direccion: data.direccion,
      formacion: data.formacion,
      telefono: data.telefono,
      correo: data.correo,
      experiencia: data.experiencia,
      oferta: this.idOferta
    }).subscribe(data =>
      {
        alert(data)
        if(data == "Tu solicitud ha sido enviada.")
        {
          window.location.reload();
        }
      })

  }


}

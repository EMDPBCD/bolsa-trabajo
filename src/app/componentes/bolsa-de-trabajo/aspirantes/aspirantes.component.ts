import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aspirantes',
  templateUrl: './aspirantes.component.html',
  styleUrls: ['./aspirantes.component.css']
})
export class AspirantesComponent implements OnInit {

  constructor(private http: HttpClient) { }
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
  acerca:string;
  puesto:string;
  edad:string;
  ngOnInit(): void {
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



    this.http.post<any>('http://tiendatalamas.com/bolsa/src/api.php/bolsa-de-trabajo/oferta-aspirantes',
    {
      id: 8,
      nombre: data.nombre,
      apellido: data.apellidos,
      direccion: data.direccion,
      formacion: data.formacion,
      telefono: data.telefono,
      correo: data.correo,
      experiencia: data.experiencia,
      oferta: this.idOferta,
      acerca:data.acerca,
      puesto:data.puesto,
      edad:data.edad
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

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-informacion-aspirantes',
  templateUrl: './informacion-aspirantes.component.html',
  styleUrls: ['./informacion-aspirantes.component.css']
})
export class InformacionAspirantesComponent implements OnInit {

  constructor(private router: Router, private _route:ActivatedRoute, private http: HttpClient) { }
  idOferta:string;
  aspirante:any;
  ocultar:boolean = false;
  empresa:string;
  contacto:string;
  direccion:string;
  formacion:string;
  telefono:string;
  correo:string;
  experiencia:string;
  ngOnInit(): void {
    this.idOferta = this._route.snapshot.paramMap.get('aspirante');
    this.obtenerAspirante();
  }

  limpiarFormulario(){
    this.empresa ="";
    this.contacto ="";
    this.direccion="";
    this.formacion="";
    this.telefono="";
    this.correo="";
    this.experiencia="";

  }

  obtenerAspirante(){
    this.aspirante = new Array;
    this.http.get<any>('http://tiendatalamas.com/bolsa/src/api.php/bolsa-de-trabajo/oferta-aspirantes/'+this.idOferta).subscribe(data => {
          Object.entries(data).forEach(
            ([key,value]) => {

              this.aspirante.push(
                {
                  oferta_id: key,
                  puesto: value["puesto"],
                  nombre: value["nombre"],
                  apellidos: value["apellidos"],
                  direccion: value["direccion"],
                  formacion: value["formacion"],
                  telefono: value["telefono"],
                  correo: value["correo"],
                  experiencia: value["experiencia"],
                  acerca: value["acerca"],
                  edad: value["edad"],
                  foto: value["foto"]
              })
            }
          )
          console.log(this.aspirante)
          //his.empresa.push(data);

    })
  }

  enviarSolicitud(data)
  {
    this.ocultar = true;
    console.log(data.empresa);
    console.log(data.direccion);
    console.log(data.telefono);
    console.log(data.correo);
    console.log(this.idOferta);
    console.log(data.contacto);


    this.http.post<any>('http://tiendatalamas.com/bolsa/src/api.php/bolsa-de-trabajo/solicitud-aspirante',
    {
      id: 8,
      empresa: data.empresa,
      contacto: data.contacto,
      telefono: data.telefono,
      correo: data.correo,
      aspirante: this.idOferta,
      direccion: data.direccion
    }).subscribe(data =>
      {
        alert(data)
        if(data == "Gracias, tu solicitud ha sido enviada.")
        {
          //this.router.navigate([''])
          window.location.reload();
        }
      })

  }
}

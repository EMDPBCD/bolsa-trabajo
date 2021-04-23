import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-n-informacion-completa',
  templateUrl: './n-informacion-completa.component.html',
  styleUrls: ['./n-informacion-completa.component.css']
})
export class NInformacionCompletaComponent implements OnInit {
  informacionNoticia: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit()
  {
    this.informacionNoticia = new Array;
    let id = this.route.snapshot.paramMap.get('id')
    this.http.get<any>('http://localhost:80/hoy-en-laredo/src/api.php/noticias/informacion/' + id).subscribe(data => 
    {
      Object.entries(data).forEach(
        ([key, value]) => {
          let titulo = key;
          let encabezado = value["encabezado"];
          let encabezadoImagen = value["encabezado_imagen"];
          let cuerpo = value["cuerpo"];
          let fecha = value["fecha"];
          let seccion = value["seccion"];
          let imagenes = [];
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
          this.informacionNoticia.push({
            titulo: titulo,
            encabezado: encabezado,
            encabezadoImagen: encabezadoImagen,
            cuerpo: cuerpo,
            fecha: fecha,
            seccion: seccion,
            imagenes: imagenes
          })
        }
      );
    }) 
  }

}

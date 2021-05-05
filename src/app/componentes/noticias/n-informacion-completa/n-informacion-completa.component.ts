import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-n-informacion-completa',
  templateUrl: './n-informacion-completa.component.html',
  styleUrls: ['./n-informacion-completa.component.css']
})
export class NInformacionCompletaComponent implements OnInit {
  informacionNoticia: any;
  noticias: any;
  constructor(private http: HttpClient, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit()
  {
    this.obtenerInformacion();   
  }

  obtenerInformacion()
  {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      // do your task for before route

      return false;
    }
    this.informacionNoticia = new Array;
    let id = this.route.snapshot.paramMap.get('id')
    this.http.get<any>('http://ticketstalamas.com/hoy-en-laredo-backend/src/api.php/noticias/informacion/' + id).subscribe(data => 
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
    this.obtenerNoticiasLateral();
  }

  obtenerNoticiasLateral()
  {
    this.noticias = new Array();
    this.http
      .get<any>
      (
        'http://ticketstalamas.com/hoy-en-laredo-backend/src/api.php/noticias/principal'
      )
      .subscribe((data) => 
      {
        for (let i = 0; i < data.length; i++) {
          this.noticias.push(data[i]);
        }
        console.log(this.noticias);
        //alert(JSON.stringify(data));
      });
      
  }

  verMas(id) {
    this.router.navigate(['/noticias/informacion-noticia', id]);
    //location.reload()
    //window.location.reload();
    this.obtenerInformacion();
  }

}

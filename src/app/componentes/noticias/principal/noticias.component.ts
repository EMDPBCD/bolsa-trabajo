import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasPrincipalComponent implements OnInit {
  noticiaPrincipal = [];
  noticias = [];
  secciones = [];

  constructor(private http: HttpClient, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() 
  {
    this.obtenerNoticiaPrincipal();
    this.obtenerSecciones();
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
          //alert(JSON.stringify(data));
        });
  }

  obtenerSecciones()
  {
    this.secciones = new Array();
    this.http.get<any>('http://localhost/hoy-en-laredo/src/api.php/noticias/secciones').subscribe((data) =>
    {
      for(let i = 0; i < data.length; i++)
      {
        this.secciones.push(data[i]);
      }
    })
    console.log(this.secciones);
  }

  verMas(id) {
    this.router.navigate(['informacion-noticia', id], 
    {
      relativeTo: this.route,
    });
  }

  obtenerNoticiaPrincipal()
  {
    this.noticiaPrincipal = new Array();
    this.http.get<any>('http://localhost/hoy-en-laredo/src/api.php/noticias/original').subscribe((data) =>
    {
      for(let i = 0; i < data.length; i++)
      {
        this.noticiaPrincipal.push(data[i]);
      }
    })
    console.log(this.noticiaPrincipal);
  }

  
}

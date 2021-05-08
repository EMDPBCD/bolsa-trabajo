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
  numeroDePaginas = [];
  selectedIndex;
  paginas;

  constructor(private http: HttpClient, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() 
  {
    this.obtenerNoticiasPorNumeroDePagina(1,0);
  }

  obtenerSecciones()
  {
    this.secciones = new Array();
    this.http.get<any>('http://localhost/hoy-en-laredo-backend/src/api.php/noticias/secciones').subscribe((data) =>
    {
      for(let i = 0; i < data.length; i++)
      {
        this.secciones.push(data[i]);
      }
    })
    console.log(this.secciones);
  }


  obtenerPaginas(){
    this.numeroDePaginas = new Array();
    this.http.get<any>('http://localhost/hoy-en-laredo-backend/src/api.php/noticias/paginas').subscribe((data) =>
    {
      console.log(data);
      this.paginas = data;
      for(let i = 1; i <= data; i++)
      {
        this.numeroDePaginas.push(i);
      }
    })
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
    this.http.get<any>('http://localhost/hoy-en-laredo-backend/src/api.php/noticias/original').subscribe((data) =>
    {
      for(let i = 0; i < data.length; i++)
      {
        this.noticiaPrincipal.push(data[i]);
      }
    })
    console.log(this.noticiaPrincipal);
  }

  mostrarPagina(index):boolean{
      if (index == 0 || index == this.paginas-1) {
        return true;
      }
      if(index == this.selectedIndex){
        return true;
      }
      for (let i = 1; i <= 5; i++) {
      if(index == this.selectedIndex-i){
        return true;
      }
      if(index == this.selectedIndex+i){
        return true;
      }
    }
    return false;
  }

  obtenerNoticiasPorNumeroDePagina(numeroDePagina, index)
  {
    this.selectedIndex = index;
    this.obtenerPaginas();
    this.obtenerNoticiaPrincipal();
    this.obtenerSecciones();
      this.noticias = new Array();
      this.http
        .get<any>
        (
          'http://localhost/hoy-en-laredo-backend/src/api.php/noticias/principal/pagina/' + numeroDePagina
        )
        .subscribe((data) => 
        {
          for (let i = 0; i < data.length; i++) {
            this.noticias.push(data[i]);
          }
          //alert(JSON.stringify(data));
        });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasPrincipalComponent implements OnInit {
  noticias = [];

  constructor(private http: HttpClient, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() 
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
          //alert(JSON.stringify(data));
        });
  }

  verMas(id) {
    this.router.navigate(['informacion-noticia', id], 
    {
      relativeTo: this.route,
    });
  }

}

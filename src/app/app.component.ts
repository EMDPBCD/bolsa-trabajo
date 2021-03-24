import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hoy-en-laredo';
  ofertas: any[];
  constructor(private http: HttpClient){}

  ngOnInit()
  {
    this.ofertas = new Array;
    this.http.get<any>('http://ticketstalamas.com/prueba_git/hoy-en-laredo-backend/src/api.php/bolsa-de-trabajo/Tecnologia').subscribe(data => {
        for(let i = 0; i < data.length; i++)
        {
          this.ofertas.push(data[i]);
        }
        console.log(this.ofertas);
    })    
    
  }
}

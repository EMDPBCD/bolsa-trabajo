import { Component, OnInit } from '@angular/core';
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
  ngOnInit(): void {
    this.idOferta = this._route.snapshot.paramMap.get('oferta');
    this.obtenerEmpresa();
  }

  obtenerEmpresa(){
    this.empresa = new Array;
    this.http.get<any>('http://localhost/hoy-en-laredo-backend/src/api.php/bolsa-de-trabajo/oferta/'+this.idOferta).subscribe(data => {
        for(let i = 0; i < data[0].length; i++)
        {

          this.empresa.push(data[0][i]);
        }
        console.log(this.empresa);
    })   
  }

}

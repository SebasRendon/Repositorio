import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
datos:any[]=[];
  constructor(private http:Http) {
console.log("prueba jhoan");

this.http.get("https://pagina-web-e87a5.firebaseio.com/datos_personales.json")
.subscribe(respuesta => {
  console.log(respuesta.json());
  this.datos=respuesta.json();
});

   }
}

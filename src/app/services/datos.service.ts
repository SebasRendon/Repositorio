import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

datos:any[]=[];
cargando:boolean;

  constructor(private http:Http) {
console.log("prueba jhoan");
this.cargando=true;
this.http.get("https://pagina-web-e87a5.firebaseio.com/datos_personales.json")
.subscribe(respuesta => {
//  console.log(respuesta.json());
  this.datos=respuesta.json();
  this.cargando=false;
});

   }

   public cargar_experiencia( cod:string ){
  return this.http.get(`https://pagina-web-e87a5.firebaseio.com/experiencia/${ cod }.json`)
}





}

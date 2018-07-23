import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DatosService} from "../../services/datos.service";

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',

})
export class PortafolioItemComponent {
cod:string = undefined;
experiencia:any = undefined;

  constructor(private route:ActivatedRoute, public _ds:DatosService) {
      route.params.subscribe(parametros =>{
        console.log(parametros['id']);
          _ds.cargar_experiencia(parametros['id']).subscribe(
            res => {
              this.cod = parametros['id'];
              this.experiencia = res.json();
              console.log(this.experiencia);
            });


      } )

  }



}

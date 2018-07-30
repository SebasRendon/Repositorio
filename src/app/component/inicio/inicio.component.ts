import { Component } from '@angular/core';
import {DatosService} from '../../services/datos.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',

})
export class InicioComponent  {

  constructor(public _ds:DatosService) {


  }



}

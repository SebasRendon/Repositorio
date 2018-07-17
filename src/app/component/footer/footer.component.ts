import { Component, OnInit } from '@angular/core';
import {DatosService} from "../../services/datos.service";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'

})
export class FooterComponent{

  constructor(public _ds:DatosService) { }



}

import { Component, OnInit } from '@angular/core';
import {DatosService} from "../../services/datos.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'

})
export class HeaderComponent  {

  constructor(public _ds:DatosService) {

  }


}

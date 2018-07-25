import { Component, OnInit } from '@angular/core';
import {DatosService} from "../../services/datos.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'

})
export class HeaderComponent  {

  constructor(public _ds:DatosService,
               public router:Router) {

               }


}

import { Component } from '@angular/core';
import {DatosService} from "./services/datos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor ( public _data:DatosService){
  
  }
}

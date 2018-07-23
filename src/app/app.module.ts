import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
//servicios
import {DatosService} from "./services/datos.service";
//rutas
import {app_routing} from "./app.routes";

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BodyComponent } from './component/body/body.component';
import { FooterComponent } from './component/footer/footer.component';
import { IndexComponent } from './component/index/index.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { PortafolioItemComponent } from './component/portafolio-item/portafolio-item.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    IndexComponent,
    EducacionComponent,
    ExperienciaComponent,
    PortafolioItemComponent
    

  ],
  imports: [
    BrowserModule,
 HttpModule,
 app_routing




  ],
  providers: [  DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

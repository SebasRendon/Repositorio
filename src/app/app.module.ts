import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
//servicios
import {DatosService} from "./services/datos.service";
//rutas


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BodyComponent } from './component/body/body.component';
import { FooterComponent } from './component/footer/footer.component';
import { IndexComponent } from './component/index/index.component';
import { EducacionComponent } from './component/educacion/educacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    IndexComponent,
    EducacionComponent
  ],
  imports: [
    BrowserModule,
 HttpModule



  ],
  providers: [  DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

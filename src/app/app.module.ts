import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
//servicios
import {DatosService} from "./services/datos.service";


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BodyComponent } from './component/body/body.component';
import { FooterComponent } from './component/footer/footer.component';
import { IndexComponent } from './component/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
 HttpModule
  ],
  providers: [  DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

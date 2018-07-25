import { RouterModule, Routes } from '@angular/router';



import {
InicioComponent,
  EducacionComponent,
  BodyComponent,
  ExperienciaComponent,
  PortafolioItemComponent
} from './component/index.paginas';



const app_routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'body', component: BodyComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'item/:id', component: PortafolioItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const app_routing = RouterModule.forRoot(app_routes,{ useHash:true});
//el useHash va crean rutas que no sean de html5
// es utilizado para aunmentar la compactinblidad cuando despleguemos el sitio

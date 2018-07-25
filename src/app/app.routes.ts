import { RouterModule, Routes } from '@angular/router';



import {
IndexComponent,
  EducacionComponent,
  BodyComponent,
  ExperienciaComponent,
  PortafolioItemComponent
} from './component/index.paginas';



const app_routes: Routes = [
  { path: 'Index', component: IndexComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'body', component: BodyComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'item/:id', component: PortafolioItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'Index' }
];

export const app_routing = RouterModule.forRoot(app_routes,{ useHash:true});
//el useHash va crean rutas que no sean de html5
// es utilizado para aunmentar la compactinblidad cuando despleguemos el sitio

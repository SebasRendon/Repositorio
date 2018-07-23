import { RouterModule, Routes } from '@angular/router';



import {
IndexComponent,
  EducacionComponent,
  BodyComponent,
  ExperienciaComponent,
  PortafolioItemComponent
} from './component/index.paginas';



const app_routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'body', component: BodyComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'item/:id', component: PortafolioItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'index' }
];

export const app_routing = RouterModule.forRoot(app_routes);

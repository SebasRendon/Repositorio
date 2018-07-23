import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './component/index/index.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { BodyComponent } from './component/body/body.component';
import {ExperienciaComponent} from './component/experiencia/experiencia.component';
import { PortafolioItemComponent } from './component/portafolio-item/portafolio-item.component';


const app_routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'body', component: BodyComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'item/:id', component: PortafolioItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'index' }
];

export const app_routing = RouterModule.forRoot(app_routes);

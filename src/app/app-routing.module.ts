import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { CodigoEticComponent } from './codigo-etic/codigo-etic.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { IntegridadComponent } from './integridad/integridad.component';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { LandingComponent } from './landing/landing.component';
import { MsionVisionComponent } from './msion-vision/msion-vision.component';
import { OrganigramaComponent } from './organigrama/organigrama.component';
import { QueHacemosComponent } from './que-hacemos/que-hacemos.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch :'full'},
  {path: '', component: LandingComponent},
  {path: 'bienvenuda', component: BienvenidaComponent},
  {path: 'codigo-etica', component: CodigoEticComponent},
  {path: 'directorio', component: DirectorioComponent},
  {path: 'integridad', component: IntegridadComponent},
  {path: 'introduccion', component: IntroduccionComponent},
  {path: 'mision-vision', component: MsionVisionComponent},
  {path: 'organigrama', component: OrganigramaComponent},
  {path: 'que-hacemos', component: QueHacemosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

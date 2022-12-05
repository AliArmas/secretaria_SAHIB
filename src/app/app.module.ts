import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { MsionVisionComponent } from './msion-vision/msion-vision.component';
import { IntegridadComponent } from './integridad/integridad.component';
import { QueHacemosComponent } from './que-hacemos/que-hacemos.component';
import { OrganigramaComponent } from './organigrama/organigrama.component';
import { CodigoEticComponent } from './codigo-etic/codigo-etic.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { IntroduccionComponent } from './introduccion/introduccion.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BienvenidaComponent,
    MsionVisionComponent,
    IntegridadComponent,
    QueHacemosComponent,
    OrganigramaComponent,
    CodigoEticComponent,
    DirectorioComponent,
    IntroduccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

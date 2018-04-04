import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EquiposPage } from '../pages/equipos/equipos';
import { PartidosPage } from '../pages/partidos/partidos';
import { EquipoDetailsPage } from '../pages/equipo-details/equipo-details';
import { PartidosDetailsPage } from '../pages/partidos-details/partidos-details';
import { TabsPage } from '../pages/tabs/tabs';
import {ClasificacionPage} from '../pages/clasificacion/clasificacion';
import {ClasificacionDetailsPage} from "../pages/clasificacion-details/clasificacion-details";
import { UserServiceProvider } from '../providers/user-service/user-service';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EquiposPage,
    PartidosPage,
    TabsPage,
    EquipoDetailsPage,
    PartidosDetailsPage,
    ClasificacionPage,
    ClasificacionDetailsPage,
    SlidesPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EquiposPage,
    PartidosPage,
    TabsPage,
    EquipoDetailsPage,
    PartidosDetailsPage,
    ClasificacionPage,
    ClasificacionDetailsPage,
    SlidesPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserServiceProvider
  ]
})
export class AppModule { }

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClasificacionDetailsPage } from '../clasificacion-details/clasificacion-details';

@IonicPage()
@Component({
  selector: 'page-clasificacion',
  templateUrl: 'clasificacion.html',
})
export class ClasificacionPage {


  equipo: Array<{
    name: string,
    fifa_code: string,
    puntos: number,
    grupo: number
  }>;

  equipoPasar: any;
  numeroGrupo: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.equipo.push({
      name: 'Rusia',
      fifa_code: 'RUS',
      puntos: 7,
      grupo: 1
    });
    this.equipo.push({
      name: 'Bielorusia',
      fifa_code: 'BIE',
      puntos: 1,
      grupo: 2
    });
    this.equipo.push({
      name: 'Canada',
      fifa_code: 'CAN',
      puntos: 9,
      grupo: 1

    });

    this.equipo.push({
      name: 'Estados Unidos',
      fifa_code: 'USA',
      puntos: 19,
      grupo: 1
    });
    this.equipo.push({
      name: 'España',
      fifa_code: 'ESP',
      puntos: 15,
      grupo: 1
    });

  }
  itemTapped(event, numeroGrupo) {
    this.navCtrl.push(ClasificacionDetailsPage, {
      numeroGrupo: numeroGrupo,
      equipo: this.equipo,
    });
  }
}


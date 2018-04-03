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
  j: number;
  equipoPasar: any;
  numeroGrupo: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.equipoPasar = [];
    this.equipo = [];
    this.j = 0;
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
      name: 'Gibraltar',
      fifa_code: 'GBR',
      puntos: 3,
      grupo: 2
    });
    this.equipo.push({
      name: 'España',
      fifa_code: 'ESP',
      puntos: 15,
      grupo: 1
    });
    this.equipo.push({
      name: 'Alemania',
      fifa_code: 'ALE',
      puntos: 22,
      grupo: 2
    });
    this.equipo.push({
      name: 'Francia',
      fifa_code: 'Fra',
      puntos: 15,
      grupo: 2
    });

  }

  obtenerEquipos(event, numeroGrupo) {
    this.j = 0;
    this.equipoPasar = [];
    for (let i = 0; i < this.equipo.length; i++) {
      console.log("i: ", i);
      console.log("Grupo: ", this.equipo[i].grupo);
      if (this.equipo[i].grupo == numeroGrupo) {
        console.log("Introduciendo el equipo numero " + i);
        this.equipoPasar[this.j] = this.equipo[i];
        this.j++;
      }
    }
    this.itemTapped(event, numeroGrupo, this.equipoPasar);
  }
  itemTapped(event, numeroGrupo, equipoPasar) {
    this.navCtrl.push(ClasificacionDetailsPage, {
      numeroGrupo: numeroGrupo,
      equipoPasar: this.equipoPasar
    });
  }
}


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-clasificacion-details',
  templateUrl: 'clasificacion-details.html',
})
export class ClasificacionDetailsPage {
  algo: any;
  grupo: number;
  equipo: Array<{
    name: string,
    fifa_code: string,
    puntos: number,
    grupo: number
  }>;
  verdadero: boolean;
  nomGrupo: string;
  clasificacion: any;
  puntuacion: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.grupo = navParams.get('numeroGrupo');
    console.log("Grupo seleccionado", this.grupo);
    this.equipo = [];
    this.puntuacion = [];
    this.verdadero = false;
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
    if (this.grupo == 1) {
      this.nomGrupo = 'A';
    }
    if (this.grupo == 2) {
      this.nomGrupo = 'B';
    }
    if (this.grupo == 3) {
      this.nomGrupo = 'C';
    }
    if (this.grupo == 4) {
      this.nomGrupo = 'D';
    }
    if (this.grupo == 5) {
      this.nomGrupo = 'E';
    }
    if (this.grupo == 6) {
      this.nomGrupo = 'F';
    }
    if (this.grupo == 7) {
      this.nomGrupo = 'G';
    }
    if (this.grupo == 8) {
      this.nomGrupo = 'H';
    }
    console.log("Nombre del grupo: ", this.nomGrupo);
    //this.algo = this.equipo.sort((a, b) => a.puntos - b.puntos);
    console.log("Longitud de array de equipo: ", this.equipo.length);
    let punteroPunt = 0;
    //Obtener el primer clasificado
    for (let i = 0; i < this.equipo.length; i++) {
      this.verdadero = false;
      for (let j = 0; j < this.equipo.length; j++) {
        if (this.equipo[i].puntos >= this.equipo[j].puntos) {
          this.verdadero = true;
        } else {
          this.verdadero = false;
        }
      }
      if (this.verdadero == true) {
        this.puntuacion[punteroPunt] = this.equipo[i];
        punteroPunt++;
      }
    }
    //Obtencion de el segundo clasificado
    for (let i = 0; i < this.equipo.length; i++) {
      this.verdadero = false;
      if (this.equipo[i].puntos < this.puntuacion[punteroPunt - 1].puntos) {
        for (let j = 0; j < this.equipo.length; j++) {
          if (this.equipo[j].puntos < this.puntuacion[punteroPunt - 1].puntos) {
            if (this.equipo[i].puntos >= this.equipo[j].puntos) {
              this.verdadero = true;
            } else {
              this.verdadero = false;
            }
          }
        }
        if (this.verdadero == true) {
          this.puntuacion[punteroPunt] = this.equipo[i];
          punteroPunt++;
        }
      }
    }
    //Obtencion del tercer clasificado
    for (let i = 0; i < this.equipo.length; i++) {
      this.verdadero = false;
      if (this.equipo[i].puntos < this.puntuacion[punteroPunt - 1].puntos) {
        for (let j = 0; j < this.equipo.length; j++) {
          if (this.equipo[j].puntos < this.puntuacion[punteroPunt - 1].puntos) {
            if (this.equipo[i].puntos >= this.equipo[j].puntos) {
              this.verdadero = true;
            } else {
              this.verdadero = false;
            }
          }
        }
        if (this.verdadero == true) {
          this.puntuacion[punteroPunt] = this.equipo[i];
          punteroPunt++;
        }
      }
    }
    //Obtencion del cuarto clasificado del grupo
    for (let i = 0; i < this.equipo.length; i++) {
      this.verdadero = false;
      if (this.equipo[i].puntos < this.puntuacion[punteroPunt - 1].puntos) {
        for (let j = 0; j < this.equipo.length; j++) {
          if (this.equipo[j].puntos < this.puntuacion[punteroPunt - 1].puntos) {
            if (this.equipo[i].puntos >= this.equipo[j].puntos) {
              this.verdadero = true;
            } else {
              this.verdadero = false;
            }
          }
        }
        if (this.verdadero == true) {
          this.puntuacion[punteroPunt] = this.equipo[i];
          punteroPunt++;
        }
      }
    }
    //
  }
}

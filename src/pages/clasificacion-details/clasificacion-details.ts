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
  equipo: any;
  verdadero: boolean;
  nomGrupo: string;
  clasificacion: any;
  puntuacion: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.equipo =[];
    this.grupo = navParams.get('numeroGrupo');
    this.equipo = navParams.get('equipoPasar');
    console.log("Grupo seleccionado", this.grupo);
    this.puntuacion = [];
    this.verdadero = false;
    
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
    for(let k=0;k<this.equipo.length;k++){
      console.log(this.equipo[k].country+""+this.equipo[k].id);}
    
    console.log("Nombre del grupo: ", this.nomGrupo);
    //this.algo = this.equipo.sort((a, b) => a.puntos - b.puntos);
    console.log("Longitud de array de equipo: ", this.equipo.length);
    let punteroPunt = 0;
    //Obtener el primer clasificado
    for (let i = 0; i < this.equipo.length; i++) {
      this.verdadero = false;
      for (let j = 0; j < this.equipo.length; j++) {
        
        if (this.equipo[i].points >= this.equipo[j].points) {
          this.verdadero = true;
        } else {
          this.verdadero = false;
          j=this.equipo.lenght-1;
        }
      }
      if (this.verdadero == true) {
        console.log("Equipo "+this.equipo[i].country+" "+this.equipo[i].points+" "+punteroPunt);
        this.puntuacion[punteroPunt] = this.equipo[i];
        punteroPunt++;
      }
    }
    //Obtencion de el segundo clasificado
    for (let i = 0; i < this.equipo.length; i++) {
      this.verdadero = false;
      if (this.equipo[i].points < this.puntuacion[punteroPunt - 1].points) {
        for (let j = 0; j < this.equipo.length; j++) {
          if (this.equipo[j].points < this.puntuacion[punteroPunt - 1].points) {
            if (this.equipo[i].points >= this.equipo[j].points) {
              this.verdadero = true;
            } else {
              this.verdadero = false;
              j=this.equipo.lenght-1;
            }
          }
        }
        if (this.verdadero == true) {
          console.log("Equipo "+this.equipo[i].country+" "+this.equipo[i].points+" "+punteroPunt);
          this.puntuacion[punteroPunt] = this.equipo[i];
          punteroPunt++;
        }
      }
    }
    //Obtencion del tercer clasificado
    for (let i = 0; i < this.equipo.length; i++) {
      this.verdadero = false;
      if (this.equipo[i].points < this.puntuacion[punteroPunt - 1].points) {
        for (let j = 0; j < this.equipo.length; j++) {
          if (this.equipo[j].points < this.puntuacion[punteroPunt - 1].points) {
            if (this.equipo[i].points >= this.equipo[j].points) {
              this.verdadero = true;
            } else {
              this.verdadero = false;
              j=this.equipo.lenght-1;
            }
          }
        }
        if (this.verdadero == true) {
          console.log("Equipo "+this.equipo[i].country+" "+this.equipo[i].points+" "+punteroPunt);
          this.puntuacion[punteroPunt] = this.equipo[i];
          punteroPunt++;
        }
      }
    }
    //Obtencion del cuarto clasificado del grupo
    for (let i = 0; i < this.equipo.length; i++) {
      this.verdadero = false;
      if (this.equipo[i].points < this.puntuacion[punteroPunt - 1].points) {
        for (let j = 0; j < this.equipo.length; j++) {
          if (this.equipo[j].points < this.puntuacion[punteroPunt - 1].points) {
            if (this.equipo[i].points >= this.equipo[j].points) {
              this.verdadero = true;
            } else {
              this.verdadero = false;
              j=this.equipo.lenght-1;
            }
          }
        }
        if (this.verdadero == true) {
          console.log("Equipo "+this.equipo[i].country+" "+this.equipo[i].points+" "+punteroPunt);
          this.puntuacion[punteroPunt] = this.equipo[i];
          punteroPunt++;
        }
      }
    }
    //
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PartidosDetailsPage } from '../partidos-details/partidos-details'
import { UserServiceProvider } from '../../providers/user-service/user-service';

@IonicPage()
@Component({
  selector: 'page-partidos',
  templateUrl: 'partidos.html',
})
export class PartidosPage {
  /* evento: Array<{
     id: number,
     type: string,
     player: string,
     time: number,
     idPartido: number,
     local: string
   }>;
   
   partido: Array<{
     idMatch: number,
     location: string,
     status: string,
     equipo_local: string,
     equipo_visitante: string,
     golesLocales: number,
     golesVisitantes: number,
     eventos: Array<{
       id: number,
       type: string,
       player: string,
       time: number,
       idPartido: number,
       local: string
     }>,
     winner: string
   }>;*/
  partido: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserServiceProvider) {
   
    /*this.evento.push({
      id: 1,
      type: 'Tarjeta Amarilla',
      player: 'Morrison',
      time: 45,
      idPartido: 1,
      local: 's'
    });
    
    this.evento.push({
      id: 2,
      type: 'Tarjeta Roja',
      player: 'Williams',
      time: 47,
      idPartido: 1,
      local: 'n'
    });
    
    this.evento.push({
      id: 3,
      type: 'Goal',
      player: 'Sinclair',
      time: 90,
      idPartido: 1,
      local: 's'
    });



    this.partido.push({
      idMatch: 1,
      location: 'Commonwealth stadium',
      status: 'Terminado',
      equipo_local: 'Canada',
      equipo_visitante: 'China',
      golesLocales: 1,
      golesVisitantes: 0,
      eventos: this.evento,
      winner: 'Canada'
    });*/

  }
  ionViewDidLoad() {
    this.userService.getMatches()
      .subscribe(
        (data) => {
          this.partido = data;
          console.log(this.partido);
          console.log("Rellenamos");
        },
        (error) => {
          console.error(error);
        }
      )

  }

  itemTapped(event, partido) {
    this.navCtrl.push(PartidosDetailsPage, {
      partido: partido,
    });
  }

}

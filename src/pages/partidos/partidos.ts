import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PartidosDetailsPage } from '../partidos-details/partidos-details'
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ToastController } from 'ionic-angular';
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
  date: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserServiceProvider,  private toastCtrl: ToastController) {

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
          this.filtroPartido();
        },
        (error) => {
          console.error(error);
        }
      )

  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Los equipos aun no han sido cargados, vuelve a clickar en el grupo',
      duration: 3000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  filtroPartido() {
    console.log("Metodo filtro partido");
    if (this.partido != null) {
      console.log("Filtramos date , "+this.partido.length);
      for (let i = 0; i < this.partido.length; i++) {
        //console.log("Bucle for");
        console.log("--"+this.date+"--"+this.partido[i].datetime);
        this.date = this.partido[i].datetime.substring(8, 10);
        this.date = this.date+"/"+this.partido[i].datetime.substring(5, 7);
        this.date = this.date+" "+this.partido[i].datetime.substring(12, 16)+"h.";
        this.partido[i].datetime = this.date;
        
      }
    } else {

      this.presentToast();

    }
  }

  itemTapped(event, partido) {
    this.navCtrl.push(PartidosDetailsPage, {
      partido: partido,
    });
  }

}

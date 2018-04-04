import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PartidosDetailsPage } from '../partidos-details/partidos-details'
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-partidos',
  templateUrl: 'partidos.html',
})
export class PartidosPage {
  partido: any;
  date: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserServiceProvider,
    private toastCtrl: ToastController, public loadingCtrl: LoadingController) {
    this.presentLoading();

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
      message: 'Los partidos aun no han sido cargados, vuelve a clickar en el grupo',
      duration: 3000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Cargando partidos...",
      duration: 3000
    });
    loader.present();
  }
  filtroPartido() {
    console.log("Metodo filtro partido");
    if (this.partido != null) {
      console.log("Filtramos date , " + this.partido.length);
      for (let i = 0; i < this.partido.length; i++) {
        //console.log("Bucle for");
        console.log("--" + this.date + "--" + this.partido[i].datetime);
        this.date = this.partido[i].datetime.substring(8, 10);
        this.date = this.date + "/" + this.partido[i].datetime.substring(5, 7);
        this.date = this.date + " " + this.partido[i].datetime.substring(12, 16) + "h.";
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

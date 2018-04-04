import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClasificacionDetailsPage } from '../clasificacion-details/clasificacion-details';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-clasificacion',
  templateUrl: 'clasificacion.html',
})
export class ClasificacionPage {

  equipo: any;
  j: number;
  equipoPasar: any;
  numeroGrupo: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public userService: UserServiceProvider, private toastCtrl: ToastController, public loadingCtrl: LoadingController) {
    this.userService.getTeams()
      .subscribe(
        (data) => {
          this.equipo = data;
          console.log(this.equipo);
          console.log("Rellenamos");
        },
        (error) => {
          console.error(error);
        }
      )
      this.presentLoading();
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Cargando grupos...",
      duration: 3000
    });
    loader.present();
  }
  ionViewDidLoad() {
    this.userService.getTeams()
      .subscribe(
        (data) => {
          this.equipo = data;
          console.log(this.equipo);
          console.log("Rellenamos");
        },
        (error) => {
          console.error(error);
        }
      )

  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Equipos cargados. Vuelve a hacer click en el grupo en el que deseas entrar para ver su calificacion',
      duration: 3000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  obtenerEquipos(event, numeroGrupo) {
    this.j = 0;
    this.equipoPasar = [];
    if (this.equipo != null) {


      for (let i = 0; i < this.equipo.length; i++) {
        console.log("i: ", i);
        console.log("Grupo: ", this.equipo[i].group_id);
        if (this.equipo[i].group_id == numeroGrupo) {
          console.log("Introduciendo el equipo numero " + i);
          this.equipoPasar[this.j] = this.equipo[i];
          this.j++;
        }
      }
      this.itemTapped(event, numeroGrupo, this.equipoPasar);
    } else {
      this.presentToast();
    }
  }
  itemTapped(event, numeroGrupo, equipoPasar) {
    this.navCtrl.push(ClasificacionDetailsPage, {
      numeroGrupo: numeroGrupo,
      equipoPasar: this.equipoPasar
    });
  }
}


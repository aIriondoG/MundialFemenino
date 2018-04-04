import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EquipoDetailsPage } from '../equipo-details/equipo-details';
import {UserServiceProvider} from '../../providers/user-service/user-service';
import { LoadingController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-equipos',
  templateUrl: 'equipos.html',
})
export class EquiposPage {
   items: any;
   equipos: any;
   searchQuery: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserServiceProvider,
     public loadingCtrl: LoadingController) {
      this.presentLoading();
  }
  ionViewDidLoad() {
    this.userService.getTeams()
      .subscribe(
        (data) => {
          this.items = data;
          this.equipos=this.items;
          //console.log(this.items);
          console.log("Rellenamos");
        },
        (error) => {
          console.error(error);
        }
      )

  }
  itemTapped(event, items) {
    this.navCtrl.push(EquipoDetailsPage, {
      items: items
    });
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Cargando equipos...",
      duration: 3000
    });
    loader.present();
  }
  getItems(ev: any) {
    // Reset items back to all of the items

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if ((val && val.trim() != '')||(val.trim()!=this.searchQuery)) {
      if(val != this.searchQuery){
        this.items= this.equipos;
      }
      this.items = this.items.filter((item) => {
        return (item.country.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
      this.searchQuery = val;
      
    }else{
      this.items = this.equipos;
    }
  }
  

}

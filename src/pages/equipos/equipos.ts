import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EquipoDetailsPage } from '../equipo-details/equipo-details';
import {UserServiceProvider} from '../../providers/user-service/user-service';

@IonicPage()
@Component({
  selector: 'page-equipos',
  templateUrl: 'equipos.html',
})
export class EquiposPage {
  
  /*items: Array<{
    name: string,
    fifa_code: string,
    puntos: number,
    grupo: number, 
    win:number,
    draw:number,
    lose:number,
    goals: number,
    goalsAgainst: number,
   }>;*/
   items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserServiceProvider) {
    /*this.items =[];
    this.items.push({
      name : 'Canada',
      fifa_code: 'CAN',
      puntos: 9,
      grupo: 1,
      win: 2,
      draw: 2,
      lose:1,
      goals: 4,
      goalsAgainst:3,
    });
    this.items.push({
      name : 'Estados Unidos',
      fifa_code: 'USA',
      puntos: 19,
      grupo: 1,
      win: 6,
      draw: 1,
      lose: 0,
      goals: 14,
      goalsAgainst:3
    });*/
  }
  ionViewDidLoad() {
    this.userService.getTeams()
      .subscribe(
        (data) => {
          this.items = data;
          console.log(this.items);
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
  

}

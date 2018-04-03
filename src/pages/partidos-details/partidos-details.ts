import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/*Implementacion para el metodo de ordenacion de listas(@pipe incluido) */

@IonicPage()
@Component({
  selector: 'page-partidos-details',
  templateUrl: 'partidos-details.html',
})
export class PartidosDetailsPage {
  sItem: any;
  /*sELocal: any;
  sEVisitante: any;*/
  sEvento : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sItem = navParams.get('partido');
    /*this.sELocal = this.sItem.eventoL;*/
    this.sEvento = this.sItem.eventos;
  }

}

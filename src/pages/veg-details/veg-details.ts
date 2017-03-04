import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-veg-details',
  templateUrl: 'veg-details.html'
})
export class VegDetailsPage {
  veg: ({name : string , price : number, imgUrl : string , color : string,text:string} | {} ) = {};
  constructor(public navCtrl: NavController, public navParams: NavParams ) {}

  ionViewDidLoad() {
    this.veg = this.navParams.data;
  }

}

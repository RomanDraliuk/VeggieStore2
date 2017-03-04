import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController} from 'ionic-angular';
import {DataService} from "../../service/Data.Service";
import {ShoppingBagPage} from "../shopping-bag/shopping-bag";
import {VeggieListPage} from "../veggie-list/veggie-list";

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  veggies: {name:string,price:number,color:string}[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public ds:DataService,public loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    this.veggies = this.ds.getVeggies();
  }
  selectVeg()
  {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.push(VeggieListPage);
  }

}

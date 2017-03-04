import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DataService} from "../../service/Data.Service";

@Component({
  selector: 'page-shopping-bag',
  templateUrl: 'shopping-bag.html'
})
export class ShoppingBagPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , private ds:DataService) {}
  bag:any[]=[];
  total:number =0;
  ionViewDidLoad() {
    this.bag = this.ds.getShoppningBag();
  }

  ionViewDidEnter(){
    this.calcPrice();
  }

  calcPrice(){
    this.total = this.bag.reduce(( p , v ) => p += v.price ,0 );
  }

  removeVeg(idx){
    this.ds.removeVeg(idx);
    this.calcPrice();
  }

}

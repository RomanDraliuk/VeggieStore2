import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DataService} from "../../service/Data.Service";
import {VegDetailsPage} from "../veg-details/veg-details";

@Component({
  selector: 'page-veggie-list',
  templateUrl: 'veggie-list.html'
})
export class VeggieListPage {

  veggies: {name:string,price:number,color:string}[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds:DataService) {}


  ionViewDidLoad() {
    this.veggies = this.ds.getVeggies();
  }

  addVeg(v)
  {
    this.ds.addVegToShoppingBag({price : v.price,name: v.name,color: v.color,imgUrl: v.imgUrl});
  }
}

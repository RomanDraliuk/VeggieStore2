import { Component } from '@angular/core';
import {VeggieListPage} from "../veggie-list/veggie-list";
import {ShoppingBagPage} from "../shopping-bag/shopping-bag";
import {DataService} from "../../service/Data.Service";
import {WelcomePage} from "../welcome/welcome";
import {WeatherPage} from "../weather/weather";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  veggieList:any = VeggieListPage;
  shoppingBag:any = ShoppingBagPage;
  welcome:any = WelcomePage;
  countItems:number;// object

  constructor(private ds:DataService) {
    this.countItems = this.ds.count;
  }

}

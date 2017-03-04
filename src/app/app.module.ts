import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import {VeggieListPage} from "../pages/veggie-list/veggie-list";
import {DataService} from "../service/Data.Service";
import {VegComponent} from "../components/veg/veg";
import {VegDetailsPage} from "../pages/veg-details/veg-details";
import {ShoppingBagPage} from "../pages/shopping-bag/shopping-bag";
import {WelcomePage} from "../pages/welcome/welcome";
import {WeatherPage} from "../pages/weather/weather";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    VeggieListPage,
    VegComponent,
    VegDetailsPage,
    ShoppingBagPage,
    WelcomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    VeggieListPage,
    VegComponent,
    VegDetailsPage,
    ShoppingBagPage,
    WelcomePage
  ],
  providers: [DataService,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

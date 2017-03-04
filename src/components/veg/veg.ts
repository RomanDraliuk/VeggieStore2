import {Component, Input} from '@angular/core';
import {VegDetailsPage} from "../../pages/veg-details/veg-details";
import {NavController} from "ionic-angular";

/*
  Generated class for the Veg component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'veg',
  templateUrl: 'veg.html'
})
export class VegComponent {
  @Input() veg;
  constructor(public navCtrl: NavController) {
  }

  selectVeg()
  {
    this.navCtrl.push(VegDetailsPage,this.veg);
  }
}

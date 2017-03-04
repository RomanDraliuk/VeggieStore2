import {Injectable} from "@angular/core";
const ALL_VEGGIES = [
  {
    name: 'Cucumber',
    color: 'green',
    price: 3.2,
    imgUrl : '1.jpg',
    text: 'Cucumber (Cucumis sativus) is a widely cultivated plant in the gourd family, Cucurbitaceae. It is a creeping vine that bears cucumiform fruits that are used as vegetables. There are three main varieties of cucumber: slicing, pickling, and seedless. Within these varieties, several cultivars have been created.'
  },
  {
    name: 'Tomato',
    color: 'red',
    price: 5.6,
    imgUrl : '2.jpg',
    text: 'Numerous varieties of tomato are widely grown in temperate climates across the world, with greenhouses allowing its production throughout the year and in cooler areas. The plants typically grow to 1–3 meters (3–10 ft) in height and have a weak stem that often sprawls over the ground and vines over other plants.'

  },
  {
    name: 'Eggplant',
    color: 'purple',
    price: 7.6,
    imgUrl : '3.jpg',
    text: 'Eggplant (Solanum melongena), or aubergine, is a species of nightshade grown for its edible fruit. Eggplant is the common name in North America and Australia, but British English uses the French word aubergine.[1] It is known in South Asia, Southeast Asia, and South Africa as brinjal'
  }
];
@Injectable()

export class DataService{
   private shoppingBag: any[]=[];
   numberOfItemInBag: {num: number} = {num: 0};
   count = 0;

  constructor(){
    //to check if there is something in the data storage
    let str:string = window.localStorage.getItem('vegetable');
    this.shoppingBag = JSON.parse( str || '[]');
    this.count = this.shoppingBag.length;
  }
  private saveData(){
    //save data to storage
    window.localStorage.setItem('vegetable',JSON.stringify(this.shoppingBag))
  }

  addVegToShoppingBag(veg)
  {
    this.shoppingBag.push(veg);
    this.saveData();
    this.count++;
  }

  getShoppningBag()
  {
    return this.shoppingBag;
  }

  removeVeg(idx){
    console.log('a');
    this.shoppingBag.splice(idx,1);
    this.count--;
    this.saveData();
  }


  getVeggies(){
    return ALL_VEGGIES;
  }

}

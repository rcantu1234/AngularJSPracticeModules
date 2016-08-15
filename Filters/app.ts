namespace MyApp {
  angular.module('filterApp',[]);
  class HomeController {
    public items;

    constructor() {
        this.items = [
          {name: 'Ball', price: 2.50, quality:7.5},
          {name: 'Bottle', price: 8.50, quality:10.25},
          {name: 'Car', price: 13500, quality:13.543},
          {name: 'Toy', price: 9.99, quality:5},
          {name: 'Computer', price: 2500, quality:19.5},
          {name: 'Zoo', price: 650000000, quality:8.6},
        ];
    }
  }

  angular.module("filterApp").controller("homeController", HomeController);

}

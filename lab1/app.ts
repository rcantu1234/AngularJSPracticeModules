// namespace MyApp {
//   angular.module("MyApp", []);
//
//   class HomeController {
//     public message = "Welcome";
//   }
//
//   angular.module("MyApp").controller("homeController", HomeController);
// }

// namespace MyApp {
//   angular.module("MyApp", []);
//
//   class HomeController {
//     public friends;
//
//     constructor() {
//       this.friends = ["Cartman", "Kyle", "Timmy", "Stan", "Kenny"];
//     }
//   }
//
//   angular.module("MyApp").controller("homeController", HomeController);
// }


namespace MyApp {
  angular.module("MyApp", []);

  class HomeController {
    public cars;

    constructor() {
      this.cars = [
        {year: 1989, make: "VM", model: "Fox"},
        {year: 1988, make: "Nissan", model: "Sentra"},
        {year: 1996, make: "Ford", model: "Explorer"},
        {year: 2009, make: "BMW", model: "i325"},
        {year: 2016, make: "Tesla", model: "Model S"},
      ];
    }
  }

  angular.module("MyApp").controller("homeController", HomeController);
}

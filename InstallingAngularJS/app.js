namespace myApp {
  angular.module("MyApp", []);

class HomeController {
  public message = "Welcome";
}

angular.module("MyApp").controller("homeController", HomeController);

}

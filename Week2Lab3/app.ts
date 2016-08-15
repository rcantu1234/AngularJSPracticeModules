namespace filter {

  angular.module("filter", []);

  class HomeController {
    public items = ["hello", "world", "hello", "should", "should", "should", "make", "hello", "sense"];
  }

  angular.module("filter").controller("HomeController", HomeController)

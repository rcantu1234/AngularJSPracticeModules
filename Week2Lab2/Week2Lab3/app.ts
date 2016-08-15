namespace filter {

  angular.module("filter", []);

  class HomeController {
    public items = ["hello", "world", "hello", "should", "should", "should", "make", "hello", "sense"];
  }

  angular.module("filter").controller("HomeController", HomeController)

//   function unique() {
//     return function (input: string[]) {
//       return input.filter((item: string, index) => input.indexOf(item) === index);
//     }
//   }
//   angular.module("filter").filter("unique", unique);
// }

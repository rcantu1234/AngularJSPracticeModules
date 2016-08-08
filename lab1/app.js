var MyApp;
(function (MyApp) {
    angular.module("MyApp", []);
    var HomeController = (function () {
        function HomeController() {
            this.cars = [
                { year: 1989, make: "VM", model: "Fox" },
                { year: 1988, make: "Nissan", model: "Sentra" },
                { year: 1996, make: "Ford", model: "Explorer" },
                { year: 2009, make: "BMW", model: "i325" },
                { year: 2016, make: "Tesla", model: "Model S" },
            ];
        }
        return HomeController;
    }());
    angular.module("MyApp").controller("homeController", HomeController);
})(MyApp || (MyApp = {}));

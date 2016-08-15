var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var TaxService = (function () {
            function TaxService() {
            }
            TaxService.prototype.CalculateTax = function (price) {
                return price * 0.08;
            };
            return TaxService;
        }());
        angular.module("MyApp", []).service("TaxService", TaxService);
        ;
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ProductsController = (function () {
            function ProductsController(TaxService) {
                this.product = {
                    name: "Milk",
                    price: 8.99,
                    tax: TaxService.CalculateTax(8.99)
                };
            }
            return ProductsController;
        }());
        angular.module("MyApp").controller("productsController", ProductsController);
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));

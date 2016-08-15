// CREATING CUSTOM SERVICES
namespace MyApp.Services {

  class TaxService {
    CalculateTax(price) {
      return price * 0.08;
    }
  }
  angular.module("MyApp", []).service("TaxService", TaxService));
}

namespace MyApp.Controllers {

  class ProductsController {
    public product;

    constructor(TaxService) {

      this.product = {
        name: "Milk",
        price: 8.99,
        tax: TaxService.CalculateTax(8.99)
      };
    }
  }
  angular.module("MyApp").controller("productsController", ProductsController);
}

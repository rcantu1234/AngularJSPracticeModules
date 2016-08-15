var MyApp;
(function (MyApp) {
    angular.module("MyApp", []);
    var StoreController = (function () {
        function StoreController() {
            this.pets = [
                { name: "Brian", species: "Dog", breed: "Beagle", temperament: "Calm", index: 0 },
                { name: "Lassie", species: "Dog", breed: "Collie", temperament: "Rough", index: 1 },
                { name: "Princess", species: "Rodent", breed: "Hamster", temperament: "Nice", index: 2 },
                { name: "Hamtaro", species: "Rodent", breed: "Hamster", temperament: "Playful", index: 3 },
                { name: "Morris", species: "Cat", breed: "Siamese", temperament: "Lazy", index: 4 },
            ];
        }
        StoreController.prototype.buy = function () {
            this.pets.pop();
        };
        return StoreController;
    }());
    MyApp.StoreController = StoreController;
    angular.module("MyApp").controller("storeController", StoreController);
})(MyApp || (MyApp = {}));

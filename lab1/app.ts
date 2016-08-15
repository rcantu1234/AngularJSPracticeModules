namespace MyApp {
  angular.module("MyApp", []);

  export class StoreController {
    public pets;
    public message;
    buy() {
      this.pets.pop()
    }

    constructor() {
      this.pets = [
        {name: "Brian", species: "Dog", breed: "Beagle", temperament: "Calm", index: 0},
        {name: "Lassie", species: "Dog", breed: "Collie", temperament: "Rough", index: 1},
        {name: "Princess", species: "Rodent", breed: "Hamster", temperament: "Nice", index:2},
        {name: "Hamtaro", species: "Rodent", breed: "Hamster", temperament: "Playful",index:3},
        {name: "Morris", species: "Cat", breed: "Siamese", temperament: "Lazy",index:4},
      ];
    }
  }

  angular.module("MyApp").controller("storeController", StoreController);
}

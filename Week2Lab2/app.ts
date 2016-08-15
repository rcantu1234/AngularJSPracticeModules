namespace MyApp.Services {

  class RandomNumbers {

    RandomFortunes() {
      let randFortunes = ["Your luck is about to change", "You will see old friends", "You will win the lottery"];
      let randomNumber = randFortunes[Math.floor(Math.random() * randFortunes.length)];
      return randomNumber;
    }

  }

  angular.module("MyApp").service("RandomNumbers", RandomNumbers);
}

namespace MyApp.Controllers {
  class RandomController {
    public fortune;

    constructor(RandomNumbers) {
      this.fortune = RandomNumbers.RandomFortunes();

    }
  }
  angular.module("MyApp").controller("RandomController", RandomController);
}

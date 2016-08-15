var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var RandomNumbers = (function () {
            function RandomNumbers() {
            }
            RandomNumbers.prototype.RandomFortunes = function () {
                var randFortunes = ["Your luck is about to change", "You will see old friends", "You will win the lottery"];
                var randomNumber = randFortunes[Math.floor(Math.random() * randFortunes.length)];
                return randomNumber;
            };
            return RandomNumbers;
        }());
        angular.module("MyApp").service("RandomNumbers", RandomNumbers);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var RandomController = (function () {
            function RandomController(RandomNumbers) {
                this.fortune = RandomNumbers.RandomFortunes();
            }
            return RandomController;
        }());
        angular.module("MyApp").controller("RandomController", RandomController);
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));

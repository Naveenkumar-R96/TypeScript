function exampleFunction(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(5));
    }
    ;
}
exampleFunction("hellow");
exampleFunction(20);
///////////////
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log("wolf woff");
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        console.log("meow");
    };
    return Cat;
}());
function animalSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
var myDog = new Dog();
var myCat = new Cat();
console.log(myCat);
console.log(myDog);
animalSound(myDog);
animalSound(myCat);
var manager = {
    id: 123,
    role: "akjdhf",
    amount: 3434,
    account: "adkfj"
};
console.log(manager.id);
var animal = function (dog, cat) {
};

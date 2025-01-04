/* interface Computer {
  name: string;
  ram: number;
  hdd: number;
}
 */
const computerExample = {
  name: ";akdjf",
  ram: 343,
  hdd: 643,
};

console.log(computerExample.name);
console.log(computerExample.hdd);
console.log(computerExample.ram);
console.log(typeof(computerExample))

//////////

interface Movie {
  readonly name: string;
  rating: number;
  genaral: number;
}

const movie1: Movie = {
  name: "bahubali",
  rating: 90,
  genaral: 1,
};

console.log(movie1.name);

movie1.rating = 343;
console.log(movie1.rating);

//////for function

/* interface Mathoperation {
  (x: number, y: number) : any
} */
interface Mathoperation{
  (a:any,b:any):any
}
const add: Mathoperation = (a, b) => a + b;
console.log(add(2, 2)); 

///////////for methods

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  sayHello():void;
}
function great(person: Person) {
  console.log(person.firstName,person.age);
}

const john:Person={
    firstName:'dkf',
    lastName:'ldkfj',
    age:34,
    sayHello(){
        console.log('hellow')
    }
}

const kumar:Person={
    firstName:'kumar',
    lastName:'ldkfj',
    age:37,
    sayHello(){
        console.log('hellow')
    }
}

great(kumar)



////

console.log("started a interface with a class")

interface Vehicle{
    start():void;
    stop():void;
}

class Car implements Vehicle{
    start(): void {
        console.log("car is starting")
    }
    stop(): void {
        console.log("car is stopped")
    } 
}

const myCar =new Car();
myCar.start()
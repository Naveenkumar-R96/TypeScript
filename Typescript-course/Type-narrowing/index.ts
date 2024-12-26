type myType =string | number;

function exampleFunction(value:myType):void{
    if (typeof value==="string"){
        console.log(value.toUpperCase())
    }
    else{console.log(value.toFixed(5))};
}

exampleFunction("hellow");
exampleFunction(20)



///////////////

class Dog{
    bark():void {
        console.log("wolf woff")
    }
}

class Cat{
    meow():void{
        console.log("meow")
    }
}

function animalSound(animal:Dog | Cat ):void{
    if (animal instanceof Dog){
        animal.bark();
    }
    else{
        animal.meow();
    }
}

const myDog =new Dog()
const myCat =new Cat();

console.log(myCat)
console.log(myDog)

animalSound(myDog)
animalSound(myCat)


////////interconection type



type Employee ={
    id:number;
    role:string;
}

type Salary ={
    amount:number;
    account:string;
}

type ManagerWithEmpInfo=Employee & Salary;

const manager: ManagerWithEmpInfo={
    id:123,
    role:"akjdhf",
    amount:3434,
    account:"adkfj"
}
console.log(manager.id);



console.log(document)

const animal =(dog:string,cat:string)=>{

}
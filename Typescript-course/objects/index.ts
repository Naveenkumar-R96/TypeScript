const person : {firstName:string; lastname:string; age:number}={
    firstName:'jhon',
    lastname:'cena',
    age:34,
}
console.log(`Name:${person.firstName}${person.lastname} Age:${person.age}`)

function printuser():{name:string;age:number;loacation:string}{
    return{
        name:'naveen',
        age:20,
        loacation:'rasipuram'
    }
}
const result=printuser();
console.log(result)

//Alter Method


type user={
    name:string;
    age:number;
    location:string;
}
const pringUserInfo=(user:user)=>{
    return `Name ${user.name} Age:${user.age} location:${user.location}`
}
const resulte=pringUserInfo({name:'naven',age:343,location:'rasiuram'})

console.log(resulte)

///


type userinfo={
    first:string;
    last:string;
    age:number;
}

type acountsInfo={
    email:string;
    password:string;
}

type naveen=userinfo&acountsInfo

const huxn:naveen={
    first:'naveen',
    last:'React Developer',
    age:21,
    email:'akdfd',
    password:'kdjfd'
}

console.log(huxn)


//////////////Union


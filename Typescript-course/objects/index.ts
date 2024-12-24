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
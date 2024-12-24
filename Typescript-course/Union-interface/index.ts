let password:string|number=20

type userInfo={
    first:string;
    last:string;
    age:number;
}
type acco={
    email:string;
    password:string;
}
const kumar:userInfo|acco={
    first:'john',
    last:'doe',
    age:34,
    email:'saldkfjd'
}
console.log(kumar)


////////interface

let color:'red'|'crimson'|'orange';
color='red';
color='orange';

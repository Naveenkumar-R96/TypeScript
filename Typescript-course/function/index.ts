function addOne(num :boolean){
    return num
}
const res =addOne(true);
console.log(res)

//Arrow Function

const double = (name:string)=>{
   const myname=name;
   return (console.log(myname))
}
double('naveen da')

const doubled = (x:number,y:number)=>{
     const result =x*y;
     console.log(result)
}
doubled(2,2)

//
function great (person: string ='naveen'){
    return `hello ${person}`;
}
const restul=great('kumar')
console.log(restul)


//

function naveen(x:number):number{
    return x*x
}
 const nk=naveen(2)
 console.log(nk)

 const nk2=(x:number):number=>{
    return x
 }
 nk2(89)
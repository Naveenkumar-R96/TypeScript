class person {
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}

const Person= new person('naveen',20)

console.log(Person)




/////////Access Specifieres

class naveen{

    public first:number;
    public last:string;
    constructor(first:number,last:string){
        this.first=first;
        this.last=last;
    }
}

let p1=new naveen(2,'adfj');
console.log(p1.last)
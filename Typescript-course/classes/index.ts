class person {
    name:string;
    age:number;

    constructor(commingname:string,commingage:number){
        this.name=commingname;
        this.age=commingage;
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


class animal{
    private one:string;

    constructor(comming:string){
        this.one=comming;
    }
    getName():string{
        return this.one
    }

}
let Animal =new animal("naveentheSS")
console.log(Animal.getName())


class NaveenDetails {
    one: string;
    two: number;
    constructor(cone: string, ctwo: number) {
        this.one = cone;
        this.two = ctwo;
    }
}

const cd = new NaveenDetails('vada', 34)

class kumar{
    lk:string;
    llk:string;
    constructor(){
    this.lk="ladsj";
    this.llk='alkdf'}
}

const lllk=new kumar
console.log(lllk)




/* class naveen{
    one:string;
    two:number;
    constructor(cone:string,ctwo:number){
        this.one=cone;
        this.two=ctwo;
    }
}

const cd=new naveen('vada',34) */
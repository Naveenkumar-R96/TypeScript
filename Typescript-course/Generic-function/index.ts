/* function printNumber(item: number, defaultValue: number) {
  return [item, defaultValue];
}
function printString(item: string, defaultValue: string) {
  return [item, defaultValue];
}

function printBool(item: boolean, defaultValue: boolean) {
  return [item, defaultValue];
}
const num = printNumber(32, 23);
const str = printString("sdkf", "adf");
const bol = printBool(true, false);

console.log(num, str, bol);

//////

function uniquefunction<Type>(item: Type, defaultValue: Type) {
  return [item, defaultValue];
}
const result = uniquefunction<number>(12, 10);
console.log(result);

interface Dog {
  name: string;
  breed: string;
}
const dog1 = uniquefunction<Dog>(
  { name: "buddy", breed: "lab" },
  { name: "default", breed: "unknown" }
);
console.log(dog1)

 let asdf:string='adkf';
 let aasdf:string;

 const dogi=asdf


  */

function printNumber(item: number, defaultValue: number): [number, number] {
  return [item, defaultValue];
}

const vanakam = printNumber(12, 34);
console.log(vanakam);

const printe = (one: number, two: string) => {
  let cad = one + two;
  console.log(cad);
};
printe(12, "sdf");

const creatingFunction = <Type>(item: Type, defaultValue: Type) => {
  console.log("its working");
  console.log(item, defaultValue);
};

creatingFunction<number>(12, 34);
creatingFunction<string>("sdf", "sdf");
creatingFunction<boolean>(true, false);

type Dog = {
  namee: string;
  bread: string;
};

function funct(
  { namee, bread }: Dog,
  { namee: defaultName, bread: defaultBread }: Dog
) {
  console.log(namee, bread, defaultName, defaultBread);
}
funct({ namee: "buddy", bread: "lab" }, { namee: "default", bread: "unknown" });

function getRandom<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randomkey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randomkey, value: obj[randomkey] };
}

const stringoj = { a: "a", b: "b", c: "c" };
const res = getRandom<string>(stringoj);

function filterArray<T>(array: T[], condition: (item: T) => boolean) {
return array.filter((item) => condition(item))
}
const numberArray=[1,2,3,4,5,6,7,8,9]

const evenNumber=filterArray<number>(numberArray,(item)=>item%2===0)
console.log(evenNumber)
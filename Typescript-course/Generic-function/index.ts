function printNumber(item: number, defaultValue: number) {
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
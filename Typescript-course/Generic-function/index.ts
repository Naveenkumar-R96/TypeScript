function printNumber(item:number,defaultValue:number){
    return[item, defaultValue]
}
function printString(item:string,defaultValue:string){
    return[item, defaultValue]
}

function printBool(item:boolean,defaultValue:boolean){
    return[item, defaultValue]
}
const num=printNumber(32,23)
const str=printString('sdkf','adf')
const bol=printBool(true,false)

console.log(num,str,bol)
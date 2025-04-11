const {format} = require('date-fns');
const {v4}=require('uuid'); // v4 is a random id generator
console.log(format(new Date(),'yyyy-MM-dd\tHH:mm:ss'));

console.log(v4());
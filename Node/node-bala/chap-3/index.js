const logEvents =require('./logEvents');

const EventEmitter=require('events');

class myEmitter extends EventEmitter{};
const myemitter=new myEmitter();
myemitter.on('event',(msg)=>{
    logEvents(msg);
})

myemitter.emit('event','log event emitted');
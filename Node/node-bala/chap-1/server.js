//import {readFile} from 'node:fs'; //import from the node module note ** .mjs
const fs=require('fs')
const path=require('path')
const fspromises=require('fs').promises

const fileOps=async()=>{
    try{
        const data= await
        fspromises.readFile(path.join(__dirname,'files','start.txt'),'utf8',)
        console.log(data)

        await fspromises.writeFile(path.join(__dirname,'files','subscribe.txt'),'hi makaley');
        console.log('complete')
        await fspromises.appendFile(path.join(__dirname,'files','subscribe.txt'),'hi makaley')
        console.log('complete spprf')
        await fspromises.rename(path.join(__dirname,'files','subscribe.txt'),path.join(__dirname,'files','thanks.txt'));
        console.log('cremae')
        //await fspromises.unlink(path.join(__dirname,'files','thanks.txt'));
    }catch(err){
        console.error(`There was an error :${err}`)
        process.exit(1)
    }
    
}
fileOps()
/* 
fs.readFile(path.join(__dirname,'files','start.txt'),'utf8',(err,data)=>{  // utf-8 is used to convert into readable text
    if (err) throw err;
    console.log(data);
   
})

fs.writeFile(path.join(__dirname,'files','subscribe.txt'),'hi makaley',(err)=>{
    if (err) throw err; 
    console.log('complete')
    fs.appendFile(path.join(__dirname,'files','subscribe.txt'),'hi makaley',(err)=>{
        if (err) throw err; 
        console.log('complete ed')
        fs.rename(path.join(__dirname,'files','subscribe.txt'),path.join(__dirname,'files','thanks.txt'),(err)=>{
            if (err) throw err; 
            console.log('complete ed')
        })
    })
})




process.on('uncaughtException',err =>{
    console.error(`There was an error :${err}`)
    process.exit(1)
})  */


process.on('unhandledRejection',err =>{
    console.error(`There was an error :${err}`)
    process.exit(1)
})

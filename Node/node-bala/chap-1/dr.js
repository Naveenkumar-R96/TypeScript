const fs=require('fs');
const path=require('path');

if(fs.existsSync('./newdir')){
    fs.rmdir('./newdir',()=>{
        console.log('done')
    })
}

fs.mkdir('./newdir',()=>{
    console.log('done')
})
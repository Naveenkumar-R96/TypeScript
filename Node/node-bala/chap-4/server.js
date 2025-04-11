const http=require('http');
const PORT=5000;
const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'})
    filepath='index.html'
    fs.readFile(filepath,(err,data)=>{
        
        if(err){
            res.writeHead(404,{'Content-type':'text/html'})
            res.write('File not found')
        }else{
            /* res.write(data); */
            res.end(data);
        }
        
    })
   
})

server.listen(PORT,(error)=>{
    if(error){
        console.error(error);
    }else{
        console.log(`Server is running on port ${PORT}`);
    }
})
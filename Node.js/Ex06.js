const http=require('http');
const request=[]
const server=http.createServer(1234,(req,res)=>{
    if(req.url!='favicon.ico'){
        res.end();
        res.push(url);
        for(const url of requests){
            res.write(url);
        }
        res.end();
    }
})
server.listen(1234);
const http = require('http');
function errorPage(res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("<h1>oops! The page U R looking is not with us!!!</h1>");
    res.write("<hr/>");
    res.write("&copy; learning 2020");
    res.end();
}
const server = http.createServer((req,res)=>{
           switch(req.url){
               case '/favicon.ico':
                   res.end();
                   break;
                case '/Register':
                    res.write("Registration is complete!!!");
                    res.end();
                    break;
                case '/UserRegistration':
                    res.write("<h1>User registration Form</h1>");
                    res.end();
                    break;
                case "/Home":
                    res.write("<h1>Home Page of my Website!!!</h1>");
                    res.end();
                    break;
                default:
                    errorPage(res);
                    break;
           }
})
server.listen(1234);
var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function (req,res){

    var q = url.parse(req.url)
    console.log(q.pathname)

    if(req.url==='/'){
        fs.readFile('html1.html',function (err,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }
    else if(req.url==='/signup'){
        fs.readFile('signup.html',(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }
    else if(req.url==='/signupaction'){
            res.write('action')
            res.end()
        }
        else{
            res.writeHead(404,{'Content-Type':'text/html'})
            res.write('error')
            res.end()
        }

}).listen(7000,()=>console.log("server started")
)
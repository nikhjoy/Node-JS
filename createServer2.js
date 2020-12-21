var http = require('http')

http.createServer(function (req,res){
    res.write('God save me')
    res.end()
}).listen(7000)


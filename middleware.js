const express = require('express')
const path = require('path')

const app = express()

app.use(function(req,res,next){
    console.log('middleware starts here')
    next()
})

app.get('/signup',function(req,res,next){
    res.sendFile(path.join(__dirname,'signupnew.html'))
    console.log('middleware this')
    next()
})

app.use(function(req,res){
    console.log('middleware ends')
})

app.post('/signup',function(req,res){
    res.send('account created')
})

app.get('/about',(req,res)=>res.send('about'))

app.listen(3000,function(){
    console.log(__dirname)
    console.log(__filename)
    console.log('server started')
})
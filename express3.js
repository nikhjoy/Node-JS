const express = require('express')
const path = require('path')

const app = express()

app.get('/signup',function(req,res){
    res.sendFile(path.join(__dirname,'signupnew.html'))
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
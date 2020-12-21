const express = require('express')

const app = express()

app.get('/',function(req,res){
    res.send('hello')
})

app.get('/about',(req,res)=>res.send('about'))

app.listen(3000,function(){
    console.log('server started')
})
const express = require('express')
const path = require('path')

const app = express()

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'signup.html'))
})

app.get('/about',(req,res)=>res.send('about'))

app.listen(3000,function(){
    console.log(__dirname)
    console.log(__filename)
    console.log('server started')
})
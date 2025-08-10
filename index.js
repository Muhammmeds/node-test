const express = require('express')
const app = express()


app.get('/home', (req,res)=>{
    res.send('server working')
})


app.listen(3000, ()=>{
    console.log('server running')
})
const express = require('express')
const app = express()


app.get('/home', (req,res)=>{
    res.send('server working')
})


app.listen(3000, '0.0.0.0', ()=>{
    console.log('server running')
})
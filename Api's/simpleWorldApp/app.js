const express = require('express')
const app = express()
const port = 3000
const data = require('./classes/datastore')
app.use(express.json({}))
app.use(express.static('./public',))
app.get('/famines',(req,res)=>{
    res.json(data.Data.famines)
})
app.get('/government',(req,res)=>{
    res.json(data.Data.government)
})
app.get('/guns',(req,res)=>{
    res.json(data.Data.guns)
})
app.get('/wars',(req,res)=>{
    res.json(data.Data['wars'])
})
app.get('/population',(req,res)=>{
    res.json(data.Data.population)
})
app.get('/trees',(req,res)=>{
    res.json(data.Data.trees)
})
app.get('/familylife',(req,res)=>{
    res.json(data.Data['family-life'])
})
app.get('/people',(req,res)=>{
    res.json(data.Data.people)
})

 app.listen(port,()=>{
     console.log(`listening on port :${port}`)
 })
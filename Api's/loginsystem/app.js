const express = require('express')
const mongoose= require('mongoose')
const config  = require('./src/config/env')
const body_parser = require('body-parser')
const app     = express()
//routers
const loginRouter = require('./src/server/routers/login.router')
const signRouter  = require('./src/server/routers/signup.router');
const indexRouter = require('./src/server/routers/index.router')



// Finally add it into your server conviguration
 app.set('view engine', 'ejs');
 app.set('views','./src/views/')
 // Include partials middleware into the server

app.use('/',express.static('src/public'))
app.use('/view',express.static('src/views'))

app.use(loginRouter)
app.use(signRouter)
app.use(indexRouter)

var connString = `mongodb+srv://${config.database.username}:${config.database.password}@cluster0.vxgwk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(connString,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})

app.listen(config.server.port,()=>{
    console.log(`listening on port ${config.server.port}`)
})




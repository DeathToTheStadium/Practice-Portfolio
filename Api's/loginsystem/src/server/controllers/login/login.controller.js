const bcrypt = require('bcrypt')
const model = require('../../models/user.model')

exports.renderLogin = (req,res) =>{
    res.render('login')
}

exports.Login = (req,res)=>{
    model.findOne({userName:req.body.userName},function(err,data){
        if (err) console.log(err)
        bcrypt.compare(req.body.password,data.password,(err,results)=>{
            if (err) console.log(err)
            if (results === true){
                res.send('loggedIn')
            } else {
                res.send('Wrong Password')
            }
        })
    })
    // bcrypt.compare()
}
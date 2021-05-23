const bcrypt = require('bcrypt')
const model = require('../../models/user.model')

exports.signUp = (req,res)=>{
    if (req.body.userName === '') {
        res.send('userName is required')
    } else if(req.body.email === '') {
        res.send('email is require')
    } else if (req.body.password === '') {
        res.send('password is required')
    }else if (req.body.firstName === '') {
        res.send('First Name and Last Name required')
    }else if (req.body.lastName === '')  {
        res.send('First Name and Last Name required')
    } else {
        bcrypt.genSalt(15,(err,salt)=>{
            err?"There was an err" + err:'Worked'
            bcrypt.hash(req.body.password, salt, async function(err, hash) {
                // Store hash in your password DB.
                let signup = new model({
                    firstName:req.body.firstName,
                    lastName:req.body.lastName,
                    email:req.body.email,
                    userName:req.body.userName,
                    password:hash
                })
                console.log(req.body.userName)
                signup.save((err,data)=>{
                    if (err) {
                        if (err.keyValue.email) {
                            res.send('email Already exists')
                        } else if (err.keyValue.userName) {
                            res.send('userName already Exists')
                        }
                    } else {
                        res.render('index')
                    }
                })
            });
        })
    }
   
}
exports.rendersignUp = (req,res)=>{
    res.render('signup')
}
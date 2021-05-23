const Express = require('express')
const router  = Express.Router()
const body_parser = require('body-parser')
const signupController  = require('../controllers/signup/signUp.controller')
router.use(body_parser.urlencoded({extended:true}))
// router.set('')

router.post('/sign-up',signupController.signUp)
router.get('/sign-up',signupController.rendersignUp)

module.exports = router
const Express = require('express')
const router  = Express.Router()
const body_parser = require('body-parser')
const loginController  = require('../controllers/login/login.controller')
router.use(body_parser.urlencoded({extended:true}))

router.get('/login',loginController.renderLogin)
router.post('/login',loginController.Login)

module.exports = router
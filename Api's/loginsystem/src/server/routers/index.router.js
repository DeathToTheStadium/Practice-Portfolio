const express = require('express')
const router = express.Router()
const body_parser = require('body-parser')
const indexController = require('../controllers/index/index.controller')
router.use(body_parser.urlencoded({extended:true}))

router.get('/',indexController.renderview)
router.post('/',indexController.renderview)

module.exports = router
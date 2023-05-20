
const {getevent,postevent,login} = require('../controller/user_controller')

const route = require('express').Router()

route.get('/',getevent)

route.post('/',postevent)

route.post('/login',login)

module.exports = route
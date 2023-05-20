
const {getevent,postevent,putevent,deletevent} = require('../controller/event_controller')

const {auth} = require('../middleware/auth')

const route = require('express').Router()

route.get('/',getevent)

route.post('/',auth,postevent)

route.put('/:id',putevent)

route.delete('/:id',deletevent)

module.exports =route
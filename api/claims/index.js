/* Claims Router */
var multer = require('multer')
var upload = multer({dest:'./uploads/'})


const claimsRouter = require('express').Router()
const claimsController = require('./claims.controller')

claimsRouter.get('/',claimsController.getAll)
claimsRouter.get('/:id',claimsController.getClaim)


claimsRouter.post('/',upload.array('myImages'), claimsController.createClaim)
    

module.exports = claimsRouter
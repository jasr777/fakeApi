/* Claims Router */

const claimsRouter = require('express').Router()
const claimsController = require('./claims.controller')

claimsRouter.get('/',claimsController.getAll)
claimsRouter.get('/:id',claimsController.getClaim)
claimsRouter.post('/',claimsController.createClaim)

module.exports = claimsRouter
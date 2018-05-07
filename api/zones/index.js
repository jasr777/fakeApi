/* Zones router */

const zonesRouter = require('express').Router();
const zonesController = require('./zones.controller');

zonesRouter.get('/', zonesController.getAll)
zonesRouter.get('/:value', zonesController.getZone)

module.exports = zonesRouter

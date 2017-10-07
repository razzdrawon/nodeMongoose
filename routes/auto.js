'use strict'

var express=require('express')

var autoController = require ('../controllers/auto')

var api=express.Router();

api.get('/auto/:id', autoController.getAuto)
api.get('/autos', autoController.getAutos)
api.post('/auto', autoController.saveAuto)
api.put('/auto/:id', autoController.updateAuto)
api.delete('/auto/:id', autoController.deleteAuto)

module.exports=api;
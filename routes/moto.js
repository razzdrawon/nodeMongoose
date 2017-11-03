'use strict'

var express=require('express');

var motoController = require ('../controllers/moto');

var api=express.Router();

api.get('/moto/:id', motoController.getMoto);
api.get('/motos', motoController.getMotos);
api.post('/moto', motoController.saveMoto);
api.put('/moto/:id', motoController.updateMoto);
api.put('/moto/colores/:id?', motoController.updateMotoColores);
api.delete('/moto/:id', motoController.deleteMoto);

module.exports=api;
'use strict'

//Importamos express
var express = require('express');
//Importamos el controlador
var modeloController = require('../controllers/modelo');

//Instanciamos un objeto Roter
var api = express.Router();

//api.get('/modelo/:id?', marcaController.getMarca);
//api.get('/modelos/', marcaController.getMarcas);
api.post('/modelo', modeloController.saveModelo);
//api.put('/modelo/:id?', marcaController.updateMarca);
//api.delete('/modelo/:id?', marcaController.deleteMarca);

//Para utilizarlo en otros ficheros e importar
module.exports = api;
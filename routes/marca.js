'use strict'

//Importamos express
var express = require('express');
//Importamos el controlador
var marcaController = require('../controllers/marca');

//Instanciamos un objeto Roter
var api = express.Router();

//api.get('/marca/:id?', marcaController.getMarca);
//api.get('/marcas/', marcaController.getMarcas);
api.post('/marca', marcaController.saveMarca);
//api.put('/marca/:id?', marcaController.updateMarca);
//api.delete('/marca/:id?', marcaController.deleteMarca);

//Para utilizarlo en otros ficheros e importar
module.exports = api;

//Importamos body-parser y express
var bodyParser = require('body-parser')
var express = require('express')

//Declaramos la variable app como instancia de express
var app = express()

//importamos las rutas del recurso para autos
var apiAuto = require('./routes/auto')
var apiMoto = require('./routes/moto')
var apiMarca = require('./routes/marca')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//URL de la API
app.use('/api', apiAuto),
app.use('/api', apiMarca),
app.use('/api', apiMoto);

//Para utilizarlo en otros ficheros e importar
module.exports = app;
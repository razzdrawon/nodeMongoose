
//Importamos body-parser y express
var bodyParser = require('body-parser')
var express = require('express')

//Declaramos la variable app como instancia de express
var app = express()

//importamos las rutas del recurso para autos
var apiAuto = require('./routes/auto')
var apiMoto = require('./routes/moto')
var apiMarca = require('./routes/marca')
var apiModelo = require('./routes/modelo')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//URL de la API
app.use('/api', apiAuto),
app.use('/api', apiMoto),
app.use('/api', apiMarca),
app.use('/api', apiModelo);

//Para utilizarlo en otros ficheros e importar
module.exports = app;
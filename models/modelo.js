'use strict';

var database = require('../database'),
mongoose = require('mongoose'),
Schema = mongoose.Schema;

//Representa el tipo de documentos en la base de datos
var ModeloSchema = new Schema(
 {
        nombre: {
            type: String,
            trim: true,
            default: '',
            required: 'Inserta un nombre del modelo por favor',
            index: {
                unique: false,
                dropDups: true
            }
        }  
    },
    {
        timestamps: true
    }
);

var Modelo = mongoose.model('Modelo', ModeloSchema);
module.exports = Modelo;
'use strict';

var database = require('../database'),
mongoose = require('mongoose'),
Schema = mongoose.Schema;

var Modelo = require('./modelo')

//Representa el tipo de documentos en la base de datos
var MarcaSchema = new Schema(
    {
        nombre: {
            type: String,
            trim: true,
            default: '',
            required: 'Inserta un nombre de la marca por favor',
            index: {
                unique: true,
                dropDups: true
            }
        },
       pais: {
            type: String,
            trim: true,
            default: '',
            required: 'Inserta un pais de la marca por favor',
            index: {
                unique: false,
                dropDups: true
            }
        },
        fechaCreacion:{
            type: Date,
            trim: true,
            default: '',
            required: 'Inserta una fecha de creacion de la marca por favor',
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

var Marca = mongoose.model('Marca', MarcaSchema);
module.exports = Marca;

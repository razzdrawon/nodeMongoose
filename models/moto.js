'use strict';

var database = require('../database'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//Representa el tipo de documentos en la base de datos
var MotoSchema = new Schema({
    marca: {
        type: String,
        trim: true,
        default: '',
        required: 'Inserta una marca por favor',
        index: {
            unique: false,
            dropDups: true
        }
    },
    modelo: {
        type: String,
        required: 'Inserta un modelo por favor',
        default: '',
        index: {
            unique: false,
            dropDups: true
        }
    },
    anio: {
        type: Number,
        require: 'Inserta un año por favor',
        default: '',
        index: {
            unique: false,
            dropDups: true
        }
    },
    version: {
        type: String,
        trim: true,
        default: '',
        required: 'Inserta una version por favor',
        index: {
            unique: false,
            dropDups: true
        }
    },
    colores: [String],
    serialVersion: {
        type: String,
        trim: true,
        required: 'Inserta un serialVersion por favor',
        index: {
            unique: true,
            dropDups: true
        }
    },
    motorInfo: {
        transmision: {
            type: String,
            require: 'Inserta una transmision por favor',
            default: '',
            index: {
                unique: false,
                dropDups: true
            },
            enum: [
                'manual',
                'automatico'
            ]
        },
    },
}, {
    timestamps: true
});

var Moto = mongoose.model('Moto', MotoSchema);
//podra ser accedido desde cualquier parte si se importa
module.exports = Moto;
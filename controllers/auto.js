'use strict'
var Auto = require('../models/auto')
var mongoose = require('mongoose')

//Definimos el método a ser consumido 
//desde el archivo de rutas
function prueba(req, res) {
    if (req.params.id) {
        var id = req.params.id
    } else {
        var id = "SIN ID"
    }
    res.status(200).send({
        message: "Este es el id " + id
    })
}

function getAuto(req, res) {
    // var autoId = req.params.id;
    // res.status(200).send({ data: autoId })
    var autoId = req.params.id;

    var idValido = mongoose.Types.ObjectId.isValid(autoId);

    if (!idValido) {
        res.status(409).send({ message: 'ID invalido' });
    }
    else {

        Auto.findById(autoId, function (err, auto) {
            if (err) {
                console.log(err);
                res.status(500).send({ message: 'Error al obtener el auto. ', error: err });
            }
            else {
                if (!auto) {
                    res.status(404).send({ message: 'No existe el id del auto' });
                }
                else {
                    res.status(200).send({ data: auto });
                }

            }
        })

    }

}

function getAutos(req, res) {
    // console.log("Entre")
    // res.status(200).send({ metodo: "getAutos" })
    Auto.find({}).sort('anio').exec(function (err, autos) {
        if (err) {
            console.log(err)
            res.status(500).send({ message: 'Erroral obtener los datos', error: err });

        } else {
            res.status(200).send({ data: autos })
        }
    });

}

function saveAuto(req, res) {
    // var params = req.body;
    // res.status(200).send({ metodo: "saveAuto", auto: params })

    var auto = new Auto(req.body);
    auto.save(function (err, autoSaved) {
        if (err) {
            console.log(err);
            res.status(500).send({
                message: 'Erroral guardar', error: err
            })
        } else {
            res.status(200).send({ data: autoSaved })
        }
    });

}



function updateAuto(req, res) {
    // var params = req.body;
    // res.status(200).send({ metodo: "updateAuto", auto: params })

    var autoId = req.params.id;
    var idValido = mongoose.Types.ObjectId.isValid(autoId);

    if (!idValido) {
        res.status(409).send({ message: 'ID invalido' });
    }
    else {
        Auto.findByIdAndUpdate(autoId, req.body, {new: true}, function (err, autoUpdate) {
            if (err) {
                console.log(err);
                res.status(500).send({ message: 'Error al obtener el auto. ', error: err });
            }
            else {
                if (!autoUpdate) {
                    res.status(404).send({ message: 'No existe el id del auto con el id proporcionado' });
                }
                else {
                    res.status(200).send({ data: autoUpdate });
                }
            }
        })
    }
}

function deleteAuto(req, res) {
    // var params = req.body;
    // res.status(200).send({ metodo: "deleteAuto", auto: params })

    var autoId = req.params.id;
    var idValido = mongoose.Types.ObjectId.isValid(autoId);

    if (!idValido) {
        res.status(409).send({ message: 'ID invalido' });
    }
    else {
        Auto.findByIdAndRemove(autoId, function (err, autoRemoved) {
            if (err) {
                console.log(err);
                res.status(500).send({ message: 'Error al obtener el auto. ', error: err });
            }
            else {
                if (!autoRemoved) {
                    res.status(404).send({ message: 'No existe el id del auto con el id proporcionado' });
                }
                else {
                    res.status(200).send({ data: autoRemoved, message: 'Auto removed'});
                }
            }
        })
    }
}

//Definimos los métodos que pueden ser alcanzables
module.exports = {
    prueba,
    getAuto,
    getAutos,
    saveAuto,
    updateAuto,
    deleteAuto
}
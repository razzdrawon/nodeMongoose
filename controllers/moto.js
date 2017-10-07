'use strict'
var Moto = require('../models/moto')
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

function getMoto(req, res) {
    // var motoId = req.params.id;
    // res.status(200).send({ data: motoId })
    var motoId = req.params.id;

    var idValido = mongoose.Types.ObjectId.isValid(motoId);

    if (!idValido) {
        res.status(409).send({ message: 'ID invalido' });
    }
    else {

        Moto.findById(motoId, function (err, moto) {
            if (err) {
                console.log(err);
                res.status(500).send({ message: 'Error al obtener la moto. ', error: err });
            }
            else {
                if (!moto) {
                    res.status(404).send({ message: 'No existe el id de la moto' });
                }
                else {
                    res.status(200).send({ data: moto });
                }

            }
        })

    }

}

function getMotos(req, res) {
    // console.log("Entre")
    // res.status(200).send({ metodo: "getMotos" })
    Moto.find({}).sort('anio').exec(function (err, motos) {
        if (err) {
            console.log(err)
            res.status(500).send({ message: 'Erroral obtener los datos', error: err });

        } else {
            res.status(200).send({ data: motos })
        }
    });

}

function saveMoto(req, res) {
    // var params = req.body;
    // res.status(200).send({ metodo: "saveMoto", moto: params })

    var moto = new Moto(req.body);
    moto.save(function (err, motoSaved) {
        if (err) {
            console.log(err);
            res.status(500).send({
                message: 'Erroral guardar', error: err
            })
        } else {
            res.status(200).send({ data: motoSaved })
        }
    });

}

function updateMoto(req, res) {
    // var params = req.body;
    // res.status(200).send({ metodo: "updateMoto", moto: params })

    var motoId = req.params.id;
    var idValido = mongoose.Types.ObjectId.isValid(motoId);

    if (!idValido) {
        res.status(409).send({ message: 'ID invalido' });
    }
    else {
        Moto.findByIdAndUpdate(motoId, req.body, {new: true}, function (err, motoUpdate) {
            if (err) {
                console.log(err);
                res.status(500).send({ message: 'Error al obtener la moto. ', error: err });
            }
            else {
                if (!motoUpdate) {
                    res.status(404).send({ message: 'No existe el id de la moto con el id proporcionado' });
                }
                else {
                    res.status(200).send({ data: motoUpdate });
                }
            }
        })
    }
}

function updateMotoColores(req,res){
    //Obtenemos el id que llega como parametro
   var motoId = req.params.id;
   //Verificamos si el parametro enviado es un ObjectId
   var idValido = mongoose.Types.ObjectId.isValid(motoId);
   if (!idValido) {
       //Si no es valido mostramos un mensaje de Id invalido
       res.status(409).send({ message: 'Id Invalido.' });
   }else{
       Moto.findByIdAndUpdate(motoId,
           {$push:{"colores":req.body.colores}},
           {safe: true, upsert: true, new : true},
           function(err,motoUpdate){
                if (!motoUpdate) {
                   res.status(404).send({ message: 'No existe la moto con el id proporcionado.' });
                }else{
                   res.status(200).send(motoUpdate)
                }
           }
        );
   }
}

function deleteMoto(req, res) {
    // var params = req.body;
    // res.status(200).send({ metodo: "deleteMoto", moto: params })

    var motoId = req.params.id;
    var idValido = mongoose.Types.ObjectId.isValid(motoId);

    if (!idValido) {
        res.status(409).send({ message: 'ID invalido' });
    }
    else {
        Moto.findByIdAndRemove(motoId, function (err, motoRemoved) {
            if (err) {
                console.log(err);
                res.status(500).send({ message: 'Error al obtener la moto. ', error: err });
            }
            else {
                if (!motoRemoved) {
                    res.status(404).send({ message: 'No existe el id de la moto con el id proporcionado' });
                }
                else {
                    res.status(200).send({ data: motoRemoved, message: 'Moto removed'});
                }
            }
        })
    }
}

//Definimos los métodos que pueden ser alcanzables
module.exports = {
    prueba,
    getMoto,
    getMotos,
    saveMoto,
    updateMoto,
    updateMotoColores,
    deleteMoto
}
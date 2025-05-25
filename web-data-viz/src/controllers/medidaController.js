var medidaModel = require("../models/medidaModel");


function buscarPontuacao(req, res) {


    var idUsuario = req.params.id_usuario;

    console.log(`Recuperando as ultimas pontuacoes`);

    medidaModel.buscarPontuacao(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarTotalTentativas(req, res) {

     var id_usuario = req.params.id_usuario;



    medidaModel.buscarTotalTentativas(id_usuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}




function grafico(req, res) {


    medidaModel.grafico().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}





module.exports = {
    buscarPontuacao , 
    buscarTotalTentativas , 
    grafico

}
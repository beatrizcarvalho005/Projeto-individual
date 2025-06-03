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



var largura = 0;
var largura2 = 0;

function grafico_procura(req, res) {
    const id_usuario = req.params.id_usuario;

    if (!id_usuario) {
        return res.status(400).json({
            erro: "O id_usuario não foi fornecido.",
            dado1: largura,
            dado2: largura2
        });
    }





    
    let resultadoTodos = [];

    medidaModel.grafico()
        .then((resTodos) => {
            resultadoTodos = resTodos || [];
            largura = resultadoTodos.length;

            return medidaModel.graficoUsuario(id_usuario);
        })
        .then((resultadoUsuario) => {
            resultadoUsuario = resultadoUsuario || [];
            largura2 = resultadoUsuario.length;

            if (largura == 0 && largura2 == 0) {
                res.status(204).send("Nenhum resultado encontrado.");
            } else {
                res.json({
                    resultado_todos: resultadoTodos,
                    resultado_especifico: resultadoUsuario
                });
            }
        })
        .catch((erro) => {
            console.error("Erro ao buscar os dados do gráfico:", erro);
            res.status(500).json({
                erro: erro.sqlMessage || erro.message || "Erro desconhecido",
                dado1: largura,
                dado2: largura2
            });
        });
}


module.exports = {
    buscarPontuacao,
    buscarTotalTentativas,
    grafico_procura,

}
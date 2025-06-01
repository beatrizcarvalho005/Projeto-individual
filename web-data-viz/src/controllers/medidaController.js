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




function grafico_procura(req, res) {
    const id_usuario = req.params.id_usuario;

    if (!id_usuario) {
        res.status(400).send("O id_usuario não foi fornecido.");
        return;
    }

    medidaModel.grafico()
        .then((resultadoTodos) => {
            return medidaModel.graficoUsuario(id_usuario)
                .then((resultadoUsuario) => {
                    if (resultadoTodos.length === 0 && resultadoUsuario.length === 0) {
                        res.status(204).send("Nenhum resultado encontrado.");
                    } else {
                        res.json({
                            resultado_todos: resultadoTodos,
                            resultado_especifico: resultadoUsuario
                        });
                    }
                });
        })
        .catch((erro) => {
            console.error("Erro ao buscar os dados do gráfico:", erro.sqlMessage || erro);
            res.status(500).json({ erro: erro.sqlMessage || erro });
        });
}





module.exports = {
    buscarPontuacao,
    buscarTotalTentativas,
    grafico_procura,

}
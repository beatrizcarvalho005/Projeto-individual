var alertas = [];

function obterdados(id_usuario) {
    fetch(`/medidas/tempo-real/${id_usuario}`)
        .then(resposta => {
            if (resposta.status == 200) {
                resposta.json().then(resposta => {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    alertar(resposta, id_usuario);
                });
            } else {
                console.error(`Nenhum dado encontrado para o id ${id_usuario} ou erro na API`);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
        });

}




function transformarEmDiv({ id_usuario, }) {

    var descricao = JSON.parse(sessionStorage.AQUARIOS).find(item => item.id == id_usuario).descricao;
    return
}

function atualizacaoPeriodica() {
    JSON.parse(sessionStorage.TENTATIVAS).forEach(item => {
        obterdados(item.id)
    });
    setTimeout(atualizacaoPeriodica, 5000);
}

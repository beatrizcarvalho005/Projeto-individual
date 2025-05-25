var database = require("../database/config");

// function buscarUltimasMedidas(idAquario, limite_linhas) {

//     var instrucaoSql = `SELECT 
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,
//                         momento,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
//                     FROM medida
//                     WHERE fk_aquario = ${idAquario}
//                     ORDER BY id DESC LIMIT ${limite_linhas}`;

// }







function buscarPontuacao(idUsuario) {

    var instrucaoSql = `select 
    r.fkUsuario as idUsuario,
    u.nome as nomeUsuario,  
    max(r.pontuacaoFinal) as maior_pontuacao,
    min(r.pontuacaoFinal) as menor_pontuacao
    from resultados_quiz as r
    join  usuario as u 
    on r.fkUsuario = u.id_usuario
    where u.id_usuario = ${idUsuario}
    group by r.fkUsuario, u.nome;  `;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}





function buscarTotalTentativas(id_usuario) {

    var instrucaoSql = `
    SELECT COUNT(*) AS total_tentativas_gerais
    FROM resultados_quiz r
    join usuario as u
    on r.fkUsuario = u.id_usuario 
    where u.id_usuario = ${id_usuario};`;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function grafico() {

    var instrucaoSql = `
   select 
concat("Questão ",Pergunta ) as  Questão ,
 count(*) as usuarios
 from teste
 group by Pergunta ;`;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




module.exports = {
    buscarPontuacao,
    buscarTotalTentativas , 
    grafico
}


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
SELECT  
    CONCAT("Questão ", Pergunta) AS Questão,  
    COUNT(DISTINCT fkUsuario) AS total_usuarios,  
    SUM(CASE WHEN escolhida = correta THEN 1 ELSE 0 END) AS total_acertos,  
    SUM(CASE WHEN escolhida <> correta THEN 1 ELSE 0 END) AS total_erros  
FROM teste2 
GROUP BY Pergunta;`;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




module.exports = {
    buscarPontuacao,
    buscarTotalTentativas , 
    grafico
}


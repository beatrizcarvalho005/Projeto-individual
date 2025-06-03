var database = require("../database/config");



function buscarPontuacao(idUsuario) {

        console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscar jportuacai(): ", )
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



function grafico() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function grafico(): ", )
    var instrucaoSql = `SELECT  
        CONCAT('Questão ', Pergunta) AS Questão,  
        COUNT(DISTINCT fkUsuario) AS total_usuarios,  
        SUM(CASE WHEN escolhida = correta THEN 1 ELSE 0 END) AS total_acertos,  
        SUM(CASE WHEN escolhida <> correta THEN 1 ELSE 0 END) AS total_erros  
    FROM teste2 
    GROUP BY Pergunta;`;


    console.log("Executando a instrução SQL do grafico (): \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}






function buscarTotalTentativas(id_usuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function total tenta(): ", )
    var instrucaoSql = `
    SELECT COUNT(*) AS total_tentativas_gerais
    FROM resultados_quiz r
    join usuario as u
    on r.fkUsuario = u.id_usuario 
    where u.id_usuario = ${id_usuario};`;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function graficoUsuario(id_usuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function eepecidof(): ", )
    var instrucaoSql = `SELECT  
    CONCAT('Questão ', Pergunta) AS Questão,  
    COUNT(DISTINCT fkUsuario) AS total_usuarios,  
    SUM(CASE WHEN escolhida = correta THEN 1 ELSE 0 END) AS total_acertos,  
    SUM(CASE WHEN escolhida <> correta THEN 1 ELSE 0 END) AS total_erros  
FROM teste2
WHERE fkUsuario = ${id_usuario}
GROUP BY Pergunta;`;


    console.log("Executando a instrução SQ do graficouursdytdyutL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




module.exports = {
    buscarPontuacao,
    buscarTotalTentativas,
    grafico,
    graficoUsuario,
}


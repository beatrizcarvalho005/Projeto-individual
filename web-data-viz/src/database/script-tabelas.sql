-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

use pagodeando;
show tables;

select * from usuario;

describe usuario;

create table perguntas_quiz (
idQuiz int primary key auto_increment,
pergunta varchar(100));

truncate table usuario;

create table alternativas_quiz (
idAlternativa int primary key auto_increment,
opcao char(1) , 
enunciado varchar(100) ,
alternativa_correta boolean , 
fk_perguntas int ,
constraint fk_perguntas foreign key (fk_perguntas) references perguntas_quiz(idquiz));

create table respostas (
idrespostas int primary key auto_increment , 
alternativa_escolhida int ,
fkUsuario int ,
fkPerguntas int , 
fkAlternativas int , 
constraint fkUsuario foreign key (fkUsuario) references usuario (id_usuario),
constraint fkPerguntas foreign key (fkPerguntas) references perguntas_quiz(idquiz) , 
constraint fkAlternativas foreign key (fkAlternativas) references alternativas_quiz(idAlternativa));

insert into perguntas_quiz (pergunta) values 
( "Em que ano surgiu o pagode?") , 
("Onde surgiu o pagode?"), 
("Onde foi criado o pagode?"),
("Qual o principal instrumento usado no pagode?"); 

insert into alternativas_quiz (opcao, enunciado, alternativa_correta , fk_perguntas) values
("A" , "1978" , true , 1) ,  
("B" , "1972" , false , 1) ,  
("C" , "1982" , false , 1) ,  
("D" , "1990" , false , 1) ,  

("A" , "São Paulo" , false , 2) ,  
("B" , "Rio de Janeiro" , true , 2) ,  
("C" , "Minas Gerais" , false , 2) ,  
("D" , "Salvador" , false , 2) , 

("A" , "Na rua" , false , 3) ,  
("B" , "No bar" , false , 3) ,  
("C" , "No fundo de quintal" , true , 3) ,  
("D" , "Na praça" , false , 3) , 

("A" , "Pandeiro" , true , 4) ,  
("B" , "Berimbau" , false , 4) ,  
("C" , "Violão" , false , 4) ,  
("D" , "Cavaquinho" , false , 4) ;


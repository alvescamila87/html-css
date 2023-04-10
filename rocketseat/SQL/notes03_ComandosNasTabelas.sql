/* Aula de SQL Avançado - Comandos nas tabelas

/* Aula de SQL Avançado - CREATE TABLE

    -CREATE TABLE
    - () dentro do parentes falar quais campos possui 
    - especificar o tipo do campo: integer, text
    - espcificar qual é o primary key
    - especificar qual é autoincrement

*/

CREATE TABLE alunos (
    matricula INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT, 
    cpf INTEGER UNIQUE, 
    responsavel TEXT
)

CREATE TABLE professores (
    id_professor INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT, 
    cpf INTEGER UNIQUE, 
    materia TEXT
)

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

CREATE TABLE aula (
    id_professor INTEGER,
    matricula INTEGER,
    FOREIGN KEY (id_professor) REFERENCES professores(id_professor),
    FOREIGN KEY (matricula) REFERENCES alunos(matricula)
)


/* Aula de SQL Avançado - ALTER TABLE

    -ALTER TABLE: alterações em tabelas

*/

ALTER TABLE aluno RENAME TO alunos

ALTER TABLE professor RENAME TO professores

ALTER TABLE aulas RENAME COLUMN id_aluno TO matricula_aluno 


/* Aula de SQL Avançado - DROP TABLE

    -DROP TABLE: excluir tabela e seus registros

*/

DROP TABLE alunos

DROP TABLE aulas

DROP TABLE professores

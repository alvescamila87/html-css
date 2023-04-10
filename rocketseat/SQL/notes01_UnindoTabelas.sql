/* Aula de SQL Avançado - Fundamentos

    PrimaryKey: chave de identificação das informação 'id_user', por exemplo, de uma tabela "A". nunca se repete.
    ForeignKey: utilização da chave de identificação 'id_user' da tabela 'A' para relacionar com a tabela 'B'. Pode se repetir.
    Uma tabela pode ter mais de uma foreing key, mas não pode ter mais de uma primary key.

*/

/* Aula de SQL Avançado - JOIN  

    -JOIN: unir tabelas (exibe o conteúdo de duas tabelas que possuem relacionamento)
    - ON: relacionamento das tabelas

*/

SELECT * FROM funcionarios JOIN departamentos ON departamentos.id_dept = funcionarios.id_departamento

/* Aula de SQL Avançado - JOIN + WHERE 

    - WHERE: utilizado para filtragem de registros a serem exibidos

*/

SELECT * FROM funcionarios JOIN departamentos ON departamentos.id_dept = funcionarios.id_departamento WHERE departamentos.id_dept = 2

/* Aula de SQL Avançado - JOIN especifiando campos

    - troca o * pelos campos (colunas) e serem exibidas, exibindo somente essas colunas de informações no retorno do sql

*/

SELECT funcionarios.nome, funcionarios.cpf, departamentos.descricao
FROM funcionarios 
JOIN departamentos 
ON funcionarios.id_departamento = departamentos.id_dept

/* Aula de SQL Avançado - Alias

    - Opção 1: alias mudar o nome das tabelas no momento de realizar os sql, utilizando o 'as + nome da tabela', depois disso, substituir os 'nomes grandes' pelas tabelas com 'as' + '...'
    - Opção 2: mudar o nome das colunas no momento de realizar os sql, ou seja, novo nome que dar para as colunas para melhorar a visualização

*/

/* opção 1 */
SELECT func.nome, func.cpf, dept.descricao
FROM funcionarios as func
JOIN departamentos as dept
ON func.id_departamento = dept.id_dept 


/* opção 2 */
SELECT func.nome as "Nome", func.cpf as "CPF", dept.descricao as "Departamento"
FROM funcionarios as func
JOIN departamentos as dept
ON func.id_departamento = dept.id_dept 

/* Aula de SQL Avançado - LEFT OUTER JOIN

    - LEFT OUTER JOIN: faz com que todo conteúdo da tabela que está na frente de 'FROM' apareça mesmo que não tenha relacionamento na tabela que tá na frente de 'ON'
    - LEFT OUTER JOIN: prioriza a exibição a tabela da esquerda

*/

SELECT * FROM funcionarios 
LEFT OUTER JOIN departamentos 
ON funcionarios.id_departamento = departamentos.id_dept

SELECT * FROM departamentos
LEFT OUTER JOIN funcionarios
ON funcionarios.id_departamento = departamentos.id_dept
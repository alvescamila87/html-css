/* Aula de SQL Avançado - Comandos avançados */

/* Aula de SQL Avançado - ORDER BY  

    -ORDER BY: organiza em ordem alfabética a visualização por nome do coluna
    - DESC: organizar de forma decrescente

*/

SELECT * FROM alunos
ORDER BY nome

SELECT * FROM professor
ORDER BY nome DESC

/* Aula de SQL Avançado - LIMIT

    - LIMIT: limita a quantidade de resultados encontrados para a exibição 

*/

SELECT * FROM aluno LIMIT 2

/* Aula de SQL Avançado - OFFSET

    - OFFSET: quantos registros o BD deve ignorar e passar a exibir os próximos não ignorados

*/

SELECT * FROM funcionarios
LIMIT 4 OFFSET 2

/* Aula de SQL Avançado - COUNT

    - COUNT: quantos registros o BD deve ignorar e passar a exibir os próximos não ignorados
    - Colocar no lugar do '*' + (nome da tabela a contar)
    - ignora quanto tem registro que tem campo NULL

*/

SELECT COUNT(nome) FROM funcionarios

/* Aula de SQL Avançado - GROUP BY

    - GROUP BY: agrupa dados semelhantes por tabela
    - Colocar no lugar do '*' + (nome da tabela a contar)
*/

SELECT id_departamento, COUNT(id_departamento) FROM funcionarios
GROUP BY id_departamento

/* Aula de SQL Avançado - JOIN, GROUP BY e COUNT juntos

*/

SELECT departamentos.descricao, COUNT(funcionarios.id_departamento) 
FROM funcionarios
JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept
GROUP BY departamento.id_dept

/* Aula de SQL Avançado - HAVING

    - HAVING: análise com campo agrupado
    - Parece WHERE, mas where só pode ser utilizado sem GROUP BY, na própria tabela no caso.

*/

SELECT departamentos.descricao, COUNT(funcionarios.id_departamento) FROM funcionarios
JOIN departamentos
ON funcionarios.id_departamento = departamento.id_dept
GROUP BY departamento.id_dept
HAVING COUNT(funcionarios.id_departamento) >= 2
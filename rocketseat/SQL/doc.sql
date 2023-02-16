/* SQLs alunos [database.sql] */ 

SELECT * FROM aluno WHERE matricula = 1

SELECT * FROM aluno WHERE nome like 'g'

SELECT nome, matricula, cpf FROM aluno WHERE nome like '%j%'

SELECT * FROM aluno WHERE cpf = 45645345687

SELECT * FROM aluno WHERE matricula = 2

SELECT * FROM aluno WHERE nome like 'Jakeliny%'

SELECT * FROM aluno WHERE responsavel like 'josefina%'

SELECT * FROM aluno WHERE responsavel like '%a'

SELECT * FROM aluno WHERE matricula >= 2

SELECT * FROM aluno WHERE matricula < 3

SELECT * FROM aluno WHERE matricula != 1

SELECT * FROM aluno WHERE matricula <> 2

SELECT * FROM aluno WHERE matricula = 1 + 2

SELECT * FROM aluno WHERE matricula = 4 - 1

SELECT * FROM aluno WHERE matricula = 2 * 1

SELECT * FROM aluno WHERE matricula = 4 / 2

SELECT * FROM aluno WHERE matricula = 3 % 2

SELECT * FROM aluno WHERE nome like 'j%' AND matricula < 2

SELECT * FROM aluno WHERE matricula = 1 OR nome like 'j%'

INSERT INTO aluno (nome, cpf, responsavel) VALUES ('Camila Ferrari', 16158493178, 'Isabel Orthman')

UPDATE aluno SET cpf=81236985214, responsavel='Paulo João' WHERE matricula = 4

DELETE FROM aluno WHERE matricula = 4


/* SQLs Funcionários [unindo_tabelas.sql] */ 

SELECT * FROM funcionarios WHERE id_funcionario = 4

SELECT * FROM funcionarios WHERE id_funcionario BETWEEN 4 AND 7

SELECT * FROM funcionarios WHERE id_funcionario NOT BETWEEN 4 and 7

SELECT * FROM funcionarios WHERE id_departamento IN (1, 3, 5)

SELECT * FROM funcionarios WHERE id_departamento NOT IN (1, 3, 5)

SELECT * FROM funcionarios WHERE id_departamento IS NULL

SELECT * FROM funcionarios WHERE id_departamento IS NOT NULL
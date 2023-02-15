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
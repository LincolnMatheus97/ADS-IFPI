-- Criação do banco e suas respectivas tabelas
CREATE DATABASE publicacoes;

CREATE TABLE assunto (
	codigo INT PRIMARY KEY,
    descricao VARCHAR(100)
);

CREATE TABLE editora (
	codigo INT PRIMARY KEY,
    cnpj VARCHAR(14) NOT NULL UNIQUE,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE nacionalidade (
	codigo INT PRIMARY KEY,
    pais VARCHAR(50)
);

CREATE TABLE autor (
	codigo INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    passaporte VARCHAR(30) NOT NULL UNIQUE,
    dt_nascimento DATE,
    nacionalidade_codigo INT,
    FOREIGN KEY (nacionalidade_codigo) REFERENCES nacionalidade(codigo)
);

CREATE TABLE livro (
	codigo INT PRIMARY KEY,
    isbn VARCHAR(13) NOT NULL UNIQUE,
    titulo VARCHAR(50) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    dt_lancamento DATE,
    assunto_codigo INT NOT NULL,
    editora_codigo INT NOT NULL,
    FOREIGN KEY (assunto_codigo) REFERENCES assunto(codigo),
    FOREIGN KEY (editora_codigo) REFERENCES editora(codigo)
);

CREATE TABLE autor_livro(
	autor_codigo INT NOT NULL,
    livro_codigo INT NOT NULL,
    PRIMARY KEY (autor_codigo, livro_codigo),
    FOREIGN KEY (autor_codigo) REFERENCES autor(codigo),
    FOREIGN KEY (livro_codigo) REFERENCES livro(codigo)
);

-- Inserção de dados nas tabelas
INSERT INTO NACIONALIDADE (codigo, pais) VALUES 
(1, 'Brasil'),
(2, 'Portugal'),
(3, 'Estados Unidos'),
(4, 'Inglaterra');

INSERT INTO ASSUNTO (codigo, descricao) VALUES 
(1, 'Banco de Dados'),
(2, 'Estruturas de Dados'),
(3, 'Programação'),
(4, 'Sistemas Operacionais'),
(5, 'Redes de Computadores');

INSERT INTO EDITORA (codigo, CNPJ, nome) VALUES 
(1, '11111111000111', 'New Editora'),
(2, '22222222000122', 'Alta Books'),
(3, '33333333000133', 'Pearson'),
(4, '44444444000144', 'O Reilly Media'),
(5, '55555555000155', 'Editora Vazia'); 

INSERT INTO AUTOR (codigo, nome, passaporte, dt_nascimento, nacionalidade_codigo) VALUES 
(1, 'Machado de Assis', 'BRA001', '1839-06-21', 1),
(2, 'João da Silva', 'BRA002', '1985-10-15', 1),
(3, 'Luis de Camões', 'POR001', '1940-01-01', 2),
(4, 'Alan Turing', 'ENG001', '1912-06-23', 4),
(5, 'Linus Torvalds', 'USA001', '1969-12-28', 3),
(6, 'Grace Hopper', 'USA002', '1906-12-09', 3),
(7, 'Martin Fowler', 'ENG002', '1963-12-18', 4),
(8, 'João Pires', 'BRA003', '1990-05-20', 1); 

INSERT INTO LIVRO (codigo, ISBN, titulo, preco, dt_lancamento, assunto_codigo, editora_codigo) VALUES 
(1, 'ISBN01', 'Banco de Dados Moderno', 120.00, '2020-05-10', 1, 1),
(2, 'ISBN02', 'Estruturas de Dados em C', 45.00, '2021-02-20', 2, 2),
(3, 'ISBN03', 'Sistemas Operacionais', 180.00, '2019-03-15', 4, 3),
(4, 'ISBN04', 'Bancos de Dados NoSQL', 55.00, '2023-01-01', 1, 1),
(5, 'ISBN05', 'Algoritmos e Dados', 65.00, '2024-06-01', 5, 2),
(6, 'ISBN06', 'SQL Avançado', 40.00, NULL, 1, 1),                    
(7, 'ISBN07', 'Java para Iniciantes', 90.00, '2022-11-12', 3, 3),
(8, 'ISBN08', 'Python para Data Science', 210.00, '2024-01-10', 3, 4),
(9, 'ISBN09', 'Refatoração de Código', 155.00, '2025-02-05', 3, 4),
(10, 'ISBN10', 'Redes de Computadores', 48.00, '2020-08-20', 5, 2);

INSERT INTO AUTOR_LIVRO (autor_codigo, livro_codigo) VALUES 
(1, 1), 
(2, 1),  
(3, 2), 
(4, 3), 
(5, 4),
(6, 6),
(7, 9),
(8, 10);

-- Consultas:
-- Livros que possuam preços superiores a R$ 50,00
SELECT * FROM livro WHERE preco > 50;
-- Livros que possuam preços entre R$ 100,00 e R$ 200,00
SELECT * FROM livro WHERE preco >= 100 AND preco <= 200;
-- Livros cujos títulos possuam a palavra ‘Banco’
SELECT * FROM livro WHERE titulo LIKE "%Banco%";
-- Livros cujos títulos iniciam com a palavra ‘Banco’
SELECT * FROM livro WHERE titulo LIKE "Banco%";
-- Livros cujos títulos terminam com a palavra ‘Dados’
SELECT * FROM livro WHERE titulo LIKE "%Dados";
-- Livros cujos títulos possuem a expressão ‘Banco de Dados’ ou ‘Bancos de Dados’
SELECT * FROM livro WHERE titulo LIKE "%Banco de Dados%" OR titulo LIKE "%Bancos de Dados%";
-- Livros que foram lançados há mais de 5 anos
SELECT * FROM livro WHERE dt_lancamento < '2021-12-31';
-- Livros que ainda não foram lançados, ou seja, com a data de lançamento nula
SELECT * FROM livro WHERE dt_lancamento IS NULL;
-- Livros cujo assunto seja ‘Estruturas de Dados’
SELECT * FROM livro WHERE assunto_codigo IN (
SELECT codigo FROM assunto WHERE descricao LIKE "%Estruturas de Dados%");
-- Livros cujo assunto tenha código 1, 2 ou 3
SELECT * FROM livro WHERE assunto_codigo IN (1, 2, 3);
-- Quantidade de livros
SELECT COUNT(codigo) FROM livro;
-- Quantidade de livros que ainda não foram lançados, ou seja, com a data de lançamento nula
SELECT COUNT(codigo) FROM livro WHERE dt_lancamento IS NULL;
--  Soma dos preços dos livros
SELECT SUM(preco) FROM livro;
-- Média de preços dos livros
SELECT AVG(preco) FROM livro;
-- Maior preço dos livros
SELECT MAX(preco) FROM livro;
-- Menor preço dos livros
SELECT MIN(preco) FROM livro;
-- O preço médio dos livros para cada assunto
SELECT assunto_codigo, AVG(preco) FROM livro GROUP BY assunto_codigo;
SELECT A.descricao, AVG(L.preco) AS media_preco FROM livro L INNER JOIN
assunto A ON L.assunto_codigo = A.codigo GROUP BY A.descricao;
-- Quantidade de livros para cada assunto
SELECT A.descricao, COUNT(L.codigo) AS qnt_livros FROM livro L INNER JOIN
assunto A ON L.assunto_codigo = A.codigo GROUP BY A.descricao;
-- O preço do livro mais caro de cada assunto, dentre aqueles que já foram lançados
SELECT A.descricao, MIN(L.preco) AS mais_caro FROM livro L INNER JOIN
assunto A ON L.assunto_codigo = A.codigo WHERE L.dt_lancamento IS NOT NULL GROUP BY A.descricao;
-- Quantidade de livros lançados por editora
SELECT E.nome, COUNT(L.codigo) AS qnt_livros FROM livro L INNER JOIN
editora E ON L.editora_codigo = E.codigo GROUP BY E.nome;
-- Assuntos cujo preço médio dos livros ultrapassa R$ 50,00
SELECT A.descricao FROM livro L INNER JOIN assunto A ON L.assunto_codigo = A.codigo 
GROUP BY A.descricao HAVING AVG(L.preco) > 50.0;
--  Assuntos que possuem pelo menos 2 livros
SELECT A.descricao FROM livro L INNER JOIN assunto A ON L.assunto_codigo = A.codigo
GROUP BY A.descricao HAVING COUNT(L.codigo) >= 2;
-- Assuntos que possuem pelo menos 2 livros já lançados
SELECT A.descricao FROM livro L INNER JOIN assunto A ON L.assunto_codigo = A.codigo
WHERE L.dt_lancamento IS NOT NULL GROUP BY A.descricao HAVING COUNT(L.codigo) >= 2;
-- Quantidade de livros lançados por assunto
SELECT A.descricao, COUNT(L.codigo) AS qnt_livros FROM livro L INNER JOIN
assunto A ON L.assunto_codigo = A.codigo WHERE L.dt_lancamento IS NOT NULL GROUP BY A.descricao;
-- Nome e passaporte dos autores que possuem a palavra ‘João’ no nome
SELECT nome, passaporte FROM autor WHERE nome LIKE "%João%";
-- Nome e passaporte dos autores que nasceram após 1° de janeiro de 1970
SELECT nome, passaporte FROM autor WHERE dt_nascimento > '1970-01-01';
-- Nome e passaporte dos autores que não são brasileiros
SELECT nome, passaporte FROM autor WHERE passaporte NOT LIKE "BRA%";
-- Quantidade de autores
SELECT COUNT(autor_codigo) AS qnt_autores FROM autor_livro;
-- Livros que possuem ao menos 2 autores
SELECT L.titulo, COUNT(AL.autor_codigo) AS mais_de_um_autor FROM autor_livro AL INNER JOIN
livro L ON AL.livro_codigo = L.codigo GROUP BY L.titulo HAVING COUNT(AL.autor_codigo) >= 2;
-- Preço médio dos livros por editora
SELECT E.nome, AVG(L.preco) AS preco_medio FROM livro L INNER JOIN
editora E ON L.editora_codigo = E.codigo GROUP BY E.nome;
-- Preço máximo, preço mínimo e preço médio dos livros cujos códigos do assunto são 1, 2 ou 3, para cada editora
SELECT E.nome, MAX(L.preco) AS preco_max, 
MIN(L.preco) AS preco_min, 
AVG(L.preco) AS preco_medio 
FROM livro L INNER JOIN editora E
ON L.editora_codigo = E.codigo WHERE L.assunto_codigo IN (1, 2, 3)
GROUP BY E.nome;
-- Quantidade de autores para cada nacionalidade
SELECT N.pais, COUNT(A.nacionalidade_codigo) AS qnt_por_nacionalidade FROM autor A INNER JOIN
nacionalidade N ON A.nacionalidade_codigo = N.codigo GROUP BY N.pais;
-- Quantidade de autores que nasceram antes de 1°de janeiro de 1920, para cada nacionalidade
SELECT N.pais, COUNT(A.nacionalidade_codigo) AS qnt_por_nacionalidade FROM autor A INNER JOIN
nacionalidade N ON A.nacionalidade_codigo = N.codigo WHERE A.dt_nascimento < '1920-01-01' GROUP BY N.pais;
-- A data de nascimento do autor mais velho
SELECT nome, MIN(dt_nascimento) AS data_do_mais_velho FROM autor WHERE dt_nascimento IN 
(SELECT MIN(dt_nascimento) FROM autor) GROUP BY nome;
SELECT MIN(dt_nascimento) FROM autor;
-- A data de nascimento do autor mais novo
SELECT nome, MAX(dt_nascimento) AS data_do_mais_velho FROM autor WHERE dt_nascimento IN 
(SELECT MAX(dt_nascimento) FROM autor) GROUP BY nome;
SELECT MAX(dt_nascimento) FROM autor;
-- Os novos preços dos livros se os valores fossem reajustados em 10%
UPDATE livro SET preco = preco * 1.1;
-- O dia da publicação do livro de código 1
SELECT DAY(dt_lancamento) FROM livro WHERE codigo = 1;
-- O mês e o ano da publicação dos livros cujo assunto tem código 1
SELECT MONTH(dt_lancamento) AS mes, YEAR(dt_lancamento) AS ano FROM livro WHERE assunto_codigo = 1;
-- Quantidade de autores distintos que estão associados a livros na tabela AUTOR_LIVRO
SELECT COUNT(DISTINCT autor_codigo) FROM autor_livro;
-- Título, assunto e preço, ordenado em ordem crescente por assunto e decrescente por preço
SELECT L.titulo, A.descricao AS assunto, L.preco FROM livro L INNER JOIN assunto A
ON L.assunto_codigo = A.codigo ORDER BY A.descricao ASC, L.preco DESC;
-- Editoras ordenadas alfabeticamente. A coluna de nomes deve ter a palavra ‘Editora’ como título
SELECT nome AS Editora FROM editora ORDER BY nome ASC;
-- Preços e os títulos dos livros, em ordem decrescente de preço
SELECT titulo, preco FROM livro ORDER BY preco DESC;
-- Editoras que já publicaram livros, sem repetições
SELECT E.nome as editoras FROM livro L INNER JOIN editora E
ON L.editora_codigo = E.codigo GROUP BY E.nome;
-- Autores brasileiros com mês e ano de nascimento, por ordem decrescente de idade e por ordem crescente de nome do autor
SELECT nome, MONTH(dt_nascimento) AS mes_nascimento, YEAR(dt_nascimento) AS ano_nascimento 
FROM autor WHERE passaporte LIKE "BRA%" 
ORDER BY dt_nascimento ASC, nome ASC; 
-- Editora (nome da editora), assunto (código do assunto) e quantidade (livros publicados pela editora para cada assunto) em ordem decrescente de quantidade
SELECT E.nome AS editora,
L.assunto_codigo AS assunto,
COUNT(L.editora_codigo) AS quantidade
FROM livro L INNER JOIN editora E
ON L.editora_codigo = E.codigo GROUP BY E.nome, L.assunto_codigo ORDER BY quantidade DESC;
-- Títulos cujo título tenha comprimento superior a 15 caracteres
SELECT titulo FROM livro WHERE LENGTH(titulo) > 15;
-- Títulos dos livros já lançados e a descrição dos seus assuntos
SELECT L.titulo AS titulo, A.descricao AS descricao
FROM livro L INNER JOIN assunto A
ON L.assunto_codigo = A.codigo WHERE dt_lancamento IS NOT NULL
GROUP BY L.titulo, A.descricao;
-- Título do livro, nome da editora que o publicou e a descrição do assunto
SELECT L.titulo AS titulo, E.nome AS editora, A.descricao AS descricao
FROM livro L INNER JOIN editora E INNER JOIN assunto A ON L.editora_codigo = E.codigo AND L.assunto_codigo = A.codigo
GROUP BY L.titulo, E.nome, A.descricao;
-- Editoras e títulos dos livros lançados pela editora, ordenada por nome da editora e pelo título do livro
SELECT E.nome AS editora, L.titulo AS titulo
FROM livro L INNER JOIN editora E ON L.editora_codigo = E.codigo
ORDER BY E.nome ASC, L.titulo ASC;
-- Editoras cadastradas e para aquelas que possuem livros publicados, relacionar também o título do livro, em ordem de nome da editora e pelo título do livro
SELECT E.nome AS editora, L.titulo AS titulo
FROM editora E LEFT JOIN livro L ON E.codigo = L.editora_codigo
ORDER BY E.nome ASC, L.titulo ASC;
-- Assuntos, contendo os títulos dos livros dos respectivos assuntos, ordenada pela descrição do assunto
SELECT A.descricao AS assunto, L.titulo AS titulo
FROM livro L INNER JOIN assunto A ON L.assunto_codigo = A.codigo
ORDER BY A.descricao ASC;
-- Títulos e editoras, relacionando a obra com a editora que a publica, quando for o caso
SELECT L.titulo AS titulo, E.nome AS editora
FROM livro L LEFT JOIN editora E ON L.editora_codigo = E.codigo;
-- Descrição de todos os assuntos e os títulos dos livros de cada um. Quando não existir um livro associado ao assunto, escrever o texto ‘Sem publicações’
SELECT A.descricao AS descricao, IFNULL(L.titulo, 'Sem publicações') AS titulo
FROM assunto A LEFT JOIN livro L ON A.codigo = L.assunto_codigo;
-- Nomes dos autores e os livros de sua autoria, ordenada pelo nome do autor
SELECT A.nome AS autor, L.titulo AS autoria
FROM autor_livro AL INNER JOIN autor A INNER JOIN livro L ON AL.autor_codigo = A.codigo AND AL.livro_codigo = L.codigo
ORDER BY A.nome ASC;
--  Editoras que publicaram livros escritos pelo autor ‘Machado de Assis’
SELECT E.nome AS editora
FROM autor_livro AL INNER JOIN autor A INNER JOIN livro L INNER JOIN editora E ON AL.autor_codigo = A.codigo AND AL.livro_codigo = L.codigo 
AND L.editora_codigo = E.codigo WHERE A.nome LIKE "%Machado de Assis%";
-- Quantidade de livros lançados que foram escritos por um autor cujo nome possui a palavra ‘Luis’
SELECT COUNT(DISTINCT L.codigo) AS qnt_livros
FROM autor A INNER JOIN autor_livro AL ON A.codigo = AL.autor_codigo
INNER JOIN livro L ON L.codigo = AL.livro_codigo
WHERE A.nome LIKE "%Luis%" AND L.dt_lancamento IS NOT NULL;
-- O preço do livro mais caro publicado pela editora ‘Books Editora’ sobre banco de dados
SELECT MAX(L.preco) AS mais_caro
FROM livro L INNER JOIN editora E ON L.editora_codigo = E.codigo
INNER JOIN assunto A ON L.assunto_codigo = A.codigo
WHERE E.nome LIKE "%Books Editora%" AND A.descricao LIKE "%Banco de Dados%";
-- Editoras que não publicaram livros.
SELECT E.nome AS editoras
FROM livro L RIGHT JOIN editora E ON L.editora_codigo = E.codigo
WHERE L.codigo IS NULL;
--  Título do livro e o nome da editora que o publica para todos os livros que custam menos que R$ 50,00
SELECT L.titulo AS titulo, E.nome AS editora 
FROM livro L INNER JOIN editora E ON L.editora_codigo = E.codigo
WHERE L.preco < 50.0;
--  Nome e passaporte do autor brasileiro que tenha nascido antes de 1° de janeiro de 1950 e os títulos dos livros de sua autoria, ordenado pelo nome do autor e pelo título do livro
SELECT A.nome AS nome_autor, A.passaporte AS passaporte, L.titulo AS livro
FROM autor A INNER JOIN autor_livro AL ON AL.autor_codigo = A.codigo
INNER JOIN livro L ON AL.livro_codigo = L.codigo
WHERE A.passaporte LIKE "BRA%" AND A.dt_nascimento < "1950-01-01" ORDER BY A.nome ASC;
-- Nome e passaporte do autor e o preço máximo dos livros de sua autoria
SELECT A.nome AS nome_autor, A.passaporte AS passaporte, MAX(L.preco) AS livro
FROM autor A INNER JOIN autor_livro AL ON AL.autor_codigo = A.codigo
INNER JOIN livro L ON AL.livro_codigo = L.codigo GROUP BY A.nome, A.passaporte;
-- Nome do autor e nome da editora que já lançaram pelo menos 2 livros
SELECT A.nome AS nome_autor, E.nome AS editora
FROM autor A INNER JOIN autor_livro AL ON AL.autor_codigo = A.codigo
INNER JOIN livro L ON AL.livro_codigo = L.codigo 
INNER JOIN editora E ON E.codigo = L.editora_codigo
GROUP BY A.nome, E.nome HAVING COUNT(L.codigo) >= 2;
-- Descrição do assunto referenciado em pelo menos 10 livros
SELECT A.descricao AS descricao
FROM livro L INNER JOIN assunto A ON L.assunto_codigo = A.codigo
GROUP BY A.descricao HAVING COUNT(L.codigo) >= 10;
-- Assuntos não foram lançados livros
SELECT A.descricao AS assunto
FROM livro L RIGHT JOIN assunto A ON L.assunto_codigo = A.codigo
WHERE L.codigo IS NULL;
-- Descrição dos assuntos e quantidade de livros lançados de cada um
SELECT A.descricao AS descricao, COUNT(L.assunto_codigo) AS qnt_lancados
FROM livro L INNER JOIN assunto A ON L.assunto_codigo = A.codigo
GROUP BY A.descricao, L.assunto_codigo;
-- Nome das editoras e o preço médio dos livros de cada uma
SELECT E.nome AS editoras, AVG(L.preco) AS preco_medio
FROM livro L INNER JOIN editora E ON L.editora_codigo = E.codigo
GROUP BY E.nome;
-- Nome das editoras e os livros das editoras que lançaram ao menos 2 livros, ordenados pelo nome da editora e pelo título da publicação
SELECT E.nome AS editoras, L.titulo AS livros
FROM livro L INNER JOIN editora E ON L.editora_codigo = E.codigo
GROUP BY E.nome, L.titulo HAVING COUNT(L.codigo) <= 2 ORDER BY E.nome ASC;
-- Títulos dos livros dos assuntos cujo preço médio do livro é superior a R$ 40,00, juntamente com os respectivos assuntos
SELECT L.titulo AS titulo, A.descricao AS assunto
FROM livro L INNER JOIN assunto A ON L.assunto_codigo = A.codigo
WHERE L.assunto_codigo IN (
SELECT assunto_codigo FROM livro
GROUP BY assunto_codigo HAVING AVG(preco) >= 40.00
);
-- Títulos dos livros cujo assunto é ‘Banco de Dados’ ou que foram lançados por editoras que contenham 'Books’ no nome
SELECT titulo FROM livro WHERE assunto_codigo IN 
	(SELECT codigo FROM assunto WHERE descricao LIKE "%Banco de Dados%") 
    OR editora_codigo IN
    (SELECT codigo FROM editora WHERE nome LIKE "%Books%" );
-- Títulos dos livros cujo assunto é ‘Banco de Dados’ e que foram lançados por editoras que contenham ‘Books’ no nome
SELECT titulo FROM livro WHERE assunto_codigo IN 
	(SELECT codigo FROM assunto WHERE descricao LIKE "%Banco de Dados%") 
    AND editora_codigo IN
    (SELECT codigo FROM editora WHERE nome LIKE "%Books%" );
-- Títulos dos livros cujo assunto é ‘Banco de Dados’ e que não foram lançados por editoras que contenham ‘Books’ no nome
SELECT titulo FROM livro WHERE assunto_codigo IN 
	(SELECT codigo FROM assunto WHERE descricao LIKE "%Banco de Dados%")
    AND editora_codigo NOT IN
    (SELECT codigo FROM editora WHERE nome LIKE "%Books%" );
-- Títulos dos livros que não foram lançados por editoras que contenham ‘Books’ no nome cujo assunto é ‘Banco de Dados’
SELECT titulo FROM livro WHERE assunto_codigo NOT IN 
	(SELECT codigo FROM assunto WHERE descricao LIKE "%Banco de Dados%")
    AND editora_codigo IN
    (SELECT codigo FROM editora WHERE nome LIKE "%Books%" );
-- Excluir as editoras que não publicaram livros
DELETE FROM editora WHERE codigo NOT IN (
	SELECT DISTINCT editora_codigo FROM livro WHERE editora_codigo IS NULL
);
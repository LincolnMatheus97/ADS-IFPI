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
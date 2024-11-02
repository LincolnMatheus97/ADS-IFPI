/*Nessa query nao foi necessario escrever o select do to_char ja que 
ele nao estava com uma funcao nativa do Postgre*/
SELECT
(SELECT name FROM candidate WHERE candidate.id = score.candidate_id) AS name_Candidate,
TO_CHAR(((math * 2) + (specific * 3) + (project_plan * 5)) / 10, 'FM999999999.00') AS score_Candidate
FROM score ORDER BY score_Candidate DESC;
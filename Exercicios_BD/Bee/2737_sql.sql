--UNION ALL uso para combinar os resultados de cada pesquisa em uma unica saida
--CAST para tranformar o resultar float -> int

SELECT 
(SELECT name FROM lawyers WHERE customers_number = 
(SELECT max(customers_number) FROM lawyers)) AS name_Lawyer,
(SELECT max(customers_number) FROM lawyers) AS customers_number
UNION ALL
SELECT
(SELECT name FROM lawyers WHERE customers_number = 
(SELECT min(customers_number) FROM lawyers)),
(SELECT min(customers_number) FROM lawyers)
UNION ALL
SELECT 'Average' AS name, 
CAST(AVG(customers_number) AS INT) AS customers_number
FROM 
lawyers;
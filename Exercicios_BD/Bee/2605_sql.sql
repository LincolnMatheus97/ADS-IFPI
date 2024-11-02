--AS uso para nomear temporariamente, atributo, coluna, ou tabela

SELECT name AS products_name,
(SELECT name FROM providers WHERE providers.id = products.id_providers) AS providers_name
FROM products WHERE id_categories = 6;
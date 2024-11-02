--ORDER BY para ordenar de acordo como voce quiser as informacoes
SELECT name AS name_Products,
(SELECT name FROM categories WHERE categories.id = products.id_categories) AS name_Categories
FROM products WHERE amount > 100 AND id_categories IN
(1, 2, 3, 6, 9) ORDER by id_categories;
SELECT name FROM products WHERE id_providers IN
(SELECT id FROM providers WHERE name LIKE 'P%') AND amount BETWEEN 10 AND 20;
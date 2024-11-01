SELECT name,
(SELECT name FROM providers WHERE name = 'Ajax SA' AND id = products.id_providers) as name_Providers
FROM products WHERE id_providers IN
(SELECT id FROM providers WHERE name = 'Ajax SA');
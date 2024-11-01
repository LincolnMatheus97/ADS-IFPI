SELECT name AS name_Products,
(SELECT name FROM providers WHERE providers.id = products.id_providers) AS name_Providers,
price AS price_Products
FROM products WHERE price > 1000 AND id_categories IN
(SELECT id FROM categories WHERE name = 'Super Luxury');
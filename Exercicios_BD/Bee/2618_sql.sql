SELECT name AS name_Products,
(SELECT name FROM providers WHERE providers.id = products.id_providers AND name = 'Sansul SA') AS name_Providers,
(SELECT name FROM categories WHERE categories.id = products.id_categories AND name = 'Imported') AS name_Categorie
FROM products WHERE id_providers IN
(SELECT id FROM providers WHERE name = 'Sansul SA') AND id_categories IN
(SELECT id FROM categories WHERE name = 'Imported'); 
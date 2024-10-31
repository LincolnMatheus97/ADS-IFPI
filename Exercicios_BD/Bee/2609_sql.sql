SELECT name,
(SELECT sum(amount) FROM products WHERE products.id_categories = categories.id) AS total_amount
FROM categories;
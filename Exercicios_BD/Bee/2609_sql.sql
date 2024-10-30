SELECT 
    (SELECT name FROM categories WHERE id = p.id_categories) AS category_name,
    SUM(p.amount) AS total_amount
FROM 
    products p
GROUP BY 
    p.id_categories;

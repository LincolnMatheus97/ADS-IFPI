SELECT 
(SELECT name FROM customers WHERE customers.id = orders.id_customers) AS name_Customers,
id FROM orders WHERE orders_date BETWEEN '2016-01-01' AND '2016-06-30';
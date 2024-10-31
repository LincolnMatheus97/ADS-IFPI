SELECT name, 
(SELECT rentals_date FROM rentals WHERE rentals.id_customers = customers.id AND rentals_date BETWEEN '2016-09-01' AND '2016-09-30') AS rentals_date
FROM customers WHERE id IN
(SELECT id_customers FROM rentals WHERE rentals_date BETWEEN '2016-09-01' AND '2016-09-30');    
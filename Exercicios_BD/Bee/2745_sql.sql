SELECT name AS name_People,
(SELECT TO_CHAR(salary / 10, 'FM999999999.00')) AS tax
FROM people WHERE salary > 3000;
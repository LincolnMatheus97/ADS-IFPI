SELECT name AS richard_Name,
(SELECT TO_CHAR(omega * 1.618, 'FM999999.000')) AS probability FROM life_registry WHERE dimensions_id IN
(SELECT id FROM dimensions WHERE name IN ('C875', 'C774')) AND name LIKE 'Richard%' ORDER BY omega;
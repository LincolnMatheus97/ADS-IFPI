SELECT packages.year AS year_Users,
(SELECT DISTINCT name FROM users WHERE users.id = packages.id_user_sender LIMIT 1) AS name_Sender,
(SELECT DISTINCT name FROM users WHERE users.id = packages.id_user_receiver LIMIT 1) AS name_Receiver
FROM packages WHERE 
id_user_receiver NOT IN (SELECT id FROM users WHERE address LIKE 'TAIWAN') AND 
id_user_sender NOT IN (SELECT id FROM users WHERE address LIKE 'TAIWAN') AND
(color = 'BLUE' OR year = '2015') ORDER BY year DESC;
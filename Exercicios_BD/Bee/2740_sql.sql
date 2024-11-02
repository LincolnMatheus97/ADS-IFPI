(SELECT CONCAT('Podium:', team) AS result FROM league WHERE position <= 3)

UNION ALL

(SELECT CONCAT('Demoted:', team) AS result FROM league WHERE position >= 14);
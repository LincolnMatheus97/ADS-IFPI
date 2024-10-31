SELECT id, name FROM movies WHERE id_prices IN
(SELECT id FROM prices WHERE value < 2.00);
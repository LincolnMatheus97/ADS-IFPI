SELECT id, name FROM movies WHERE id_genres IN
(SELECT id FROM genres WHERE description = 'Action');
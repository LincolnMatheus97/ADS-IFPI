--Usamos GROUP BY para agrupar os registros pelo amount, para contar frequencia de cada valor
SELECT amount FROM value_table GROUP BY amount ORDER BY COUNT(*) DESC LIMIT 1;
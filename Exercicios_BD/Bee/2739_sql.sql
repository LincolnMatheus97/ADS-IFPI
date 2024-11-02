--TO_CHAR tambem serve como um substring, posso pegar uma parte pre definida de um atributo ja que o atributo é definido como YMD
SELECT name,
CAST(TO_CHAR(payday, 'DD') AS INT) AS day_Payday
FROM loan;
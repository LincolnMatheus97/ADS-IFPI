--TO_CHAR para formatar quantas casas decimais voce deseja 

SELECT TO_CHAR(AVG(price), 'FM999999999.00') FROM products;
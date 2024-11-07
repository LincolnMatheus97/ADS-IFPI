SELECT cpf, enome AS nome_Empregado,
(SELECT dnome FROM departamentos WHERE departamentos.dnumero = empregados.dnumero) AS nome_Departamento
FROM empregados WHERE cpf NOT IN
(SELECT cpf_emp FROM trabalha WHERE pnumero IN
(SELECT pnumero FROM projetos)) ORDER BY cpf;
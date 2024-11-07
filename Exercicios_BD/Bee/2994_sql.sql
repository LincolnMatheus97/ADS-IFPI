SELECT name AS name_Doctor, 
ROUND(
    (SELECT SUM(hours * 150 * (1 + (SELECT bonus FROM work_shifts WHERE work_shifts.id = attendances.id_work_shift) / 100.0)) 
    FROM attendances WHERE attendances.id_doctor = doctors.id), 1) AS salary
FROM doctors 
ORDER BY salary DESC;
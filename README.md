# ExamFinal2024

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Enunciado
Desarrollar una aplicación web intermedia para calcular los pagos de empleados, incluyendo horas extras y deducciones, que permita gestionar y visualizar el cálculo del salario final de los empleados.

Formulario de Ingreso de Datos del Empleado: (10 puntos)
Crear un formulario que permita al usuario ingresar el nombre del empleado, salario por hora, horas trabajadas y horas extras trabajadas.
Validar que todos los campos sean números positivos.
Deshabilitar el botón de cálculo hasta que todos los campos sean válidos.
Cálculo del Salario: (10 puntos)
Implementar un servicio en Angular que realice el cálculo del salario semanal del empleado utilizando la siguiente lógica:

Salario Regular: El salario regular se calcula con base en las horas trabajadas y el salario por hora ingresado por el empleado.
Salario por Horas Extras: Se debe considerar una tarifa adicional para las horas trabajadas que exceden el horario regular. Esta tarifa adicional es 1.5 veces el salario por hora regular.
Deducciones: Se debe calcular un porcentaje del salario total (salario regular más salario por horas extras) para deducciones como impuestos. El porcentaje estándar para deducciones es del 10% del salario total.
Salario Neto: El salario neto se obtiene después de aplicar todas las deducciones al salario total.
Mostrar los resultados de salario regular, salario por horas extras, deducciones y salario neto.

Models
Modelo para el Request de Ingreso de Datos del Empleado:

name: Nombre del empleado.
hourlyWage: Salario por hora del empleado.
hoursWorked: Horas trabajadas durante la semana.
overtimeHours: Horas extras trabajadas durante la semana.
Modelo para el Response de Cálculo del Salario:

regularSalary: Salario regular basado en las horas trabajadas y el salario por hora.
overtimeSalary: Salario por horas extras basado en una tarifa adicional.
deductions: Deducciones aplicadas al salario total.
netSalary: Salario neto después de aplicar las deducciones.

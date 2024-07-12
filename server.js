const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.post('/api/calcular-salario', (req, res) => {
  const { salarioPorHora, horasTrabajadas, horasExtras } = req.body;

  const salarioRegular = salarioPorHora * horasTrabajadas;
  const salarioHorasExtras = salarioPorHora * 1.5 * horasExtras;
  const deducciones = 0.1 * (salarioRegular + salarioHorasExtras);
  const salarioNeto = salarioRegular + salarioHorasExtras - deducciones;

  res.json({
    regularSalary: salarioRegular,
    overtimeSalary: salarioHorasExtras,
    deductions: deducciones,
    netSalary: salarioNeto
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

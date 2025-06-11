function converter() {
  const temp = parseFloat(document.getElementById('temperatura').value);
  const tipo = document.getElementById('tipo').value;
  let resultado = '';

  if (isNaN(temp)) {
    resultado = 'Por favor, insira uma temperatura válida.';
  } else if (tipo === 'cToF') {
    resultado = `${temp}°C = ${(temp * 1.8 + 32).toFixed(2)}°F`;
  } else {
    resultado = `${temp}°F = ${((temp - 32) / 1.8).toFixed(2)}°C`;
  }

  document.getElementById('resultado').textContent = resultado;
}

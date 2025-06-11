function simularSaque() {
  const valorInput = document.getElementById("valor");
  const resultadoDiv = document.getElementById("resultado");

  let valor = parseInt(valorInput.value);
  let resultado = "";

  if (isNaN(valor) || valor <= 0) {
    resultadoDiv.innerHTML = "Por favor, insira um valor válido para saque.";
    resultadoDiv.style.color = "red";
    return;
  }

  const notas = [100, 50, 20, 10, 5, 2];
  const distribuicao = {};

  for (let nota of notas) {
    distribuicao[nota] = Math.floor(valor / nota);
    valor %= nota;
  }

  if (valor !== 0) {
    resultadoDiv.innerHTML = "Não é possível sacar o valor solicitado com as notas disponíveis.";
    resultadoDiv.style.color = "red";
    return;
  }

  resultado += "<strong>Notas distribuídas:</strong><ul>";
  for (let nota of notas) {
    if (distribuicao[nota] > 0) {
      resultado += `<li>${distribuicao[nota]} nota(s) de R$ ${nota},00</li>`;
    }
  }
  resultado += "</ul>";

  resultadoDiv.innerHTML = resultado;
  resultadoDiv.style.color = "#006400";
}

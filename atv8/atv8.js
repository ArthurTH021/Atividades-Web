function verificarPrimo() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(numero) || numero < 2) {
        resultado.textContent = 'Digite um número inteiro maior ou igual a 2.';
        return;
    }

    let primo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            primo = false;
            break;
        }
    }

    if (primo) {
        resultado.textContent = `${numero} é um número primo.`;
    } else {
        resultado.textContent = `${numero} não é um número primo.`;
    }
}
  
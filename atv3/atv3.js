const botao = document.querySelector('#gerar');
const resultado = document.querySelector('#resultado');

botao.addEventListener('click', function () {
    const numero = parseInt(document.querySelector('#numero').value);

    if (isNaN(numero)) {
        resultado.innerHTML = '<p>Por favor, digite um número válido.</p>';
        return;
    }

    let tabuada = `<h3>Tabuada do ${numero}</h3>`;
    for (let i = 1; i <= 10; i++) {
        tabuada += `<p>${numero} × ${i} = ${numero * i}</p>`;
    }

    resultado.innerHTML = tabuada;
});
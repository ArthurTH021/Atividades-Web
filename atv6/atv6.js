function adicionar() {
    const input = document.getElementById('adicionar')
    const Tarefa = input.value
    input.value = " "

    const li = document.createElement('li')

    const span = document.createElement('span')
    span.textContent = Tarefa;

    const botaoVerificar = document.createElement('button')
    botaoVerificar.textContent = "concluir"
    botaoVerificar.onclick = function () {
        span.classList.toggle('feita');
    }

    const botaoRemover = document.createElement('button')
    botaoRemover.textContent = "remover"
    botaoRemover.onclick = function () {
        li.remove()
    }
    const botoes = document.createElement('div');
    botoes.className = 'botoes';
 
    botoes.appendChild(botaoVerificar);
    botoes.appendChild(botaoRemover);
    li.appendChild(span);
    li.appendChild(botoes);

    document.getElementById('ListaUl').appendChild(li);


}
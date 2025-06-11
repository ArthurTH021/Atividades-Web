const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;

    function verificarPalpite() {
      const entrada = document.getElementById('palpite');
      const mensagem = document.getElementById('mensagem');
      const palpite = Number(entrada.value);

      if (palpite < 1 || palpite > 100 || isNaN(palpite)) {
        mensagem.textContent = "Digite um número válido entre 1 e 100.";
        return;
      }

      tentativas++;

      if (palpite === numeroSecreto) {
        mensagem.textContent = `Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativa(s).`;
        entrada.disabled = true;
      } else if (palpite < numeroSecreto) {
        mensagem.textContent = "O número é maior. Tente novamente.";
      } else {
        mensagem.textContent = "O número é menor. Tente novamente.";
      }

      entrada.value = "";
      entrada.focus();
    }
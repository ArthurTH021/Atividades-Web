function sortearNome() {
      const entrada = document.getElementById('nomes').value;
      const listaNomes = entrada.split(',').map(nome => nome.trim()).filter(nome => nome !== '');

      if (listaNomes.length === 0) {
        document.getElementById('resultado').textContent = "Digite pelo menos um nome!";
        return;
      }

      const indiceSorteado = Math.floor(Math.random() * listaNomes.length);
      const nomeSorteado = listaNomes[indiceSorteado];

      document.getElementById('resultado').textContent = `Nome sorteado: ${nomeSorteado} 🎉`;
    }

    function resetar() {
      document.getElementById('nomes').value = '';
      document.getElementById('resultado').textContent = '';
    }
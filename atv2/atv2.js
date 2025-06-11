function calcularMedia() {
      const n1 = parseFloat(document.getElementById("nota1").value);
      const n2 = parseFloat(document.getElementById("nota2").value);
      const n3 = parseFloat(document.getElementById("nota3").value);

      if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        document.getElementById("resultado").textContent = "Preencha todas as notas corretamente!";
        return;
      }

      const media = (n1 + n2 + n3) / 3;
      let mensagem = `Média: ${media.toFixed(2)} - `;

      if (media >= 7) {
        mensagem += "Aprovado";
      } else if (media >= 5) {
        mensagem += "Em exame";
      } else {
        mensagem += "Reprovado";
      }

      document.getElementById("resultado").textContent = mensagem;
    }

    function resetarFormulario() {
      document.getElementById("nota1").value = "";
      document.getElementById("nota2").value = "";
      document.getElementById("nota3").value = "";
      document.getElementById("resultado").textContent = "";
    }

let intervalo;

function iniciarContador() {
  clearInterval(intervalo); // limpa caso já esteja rodando

  let minutos = parseInt(document.getElementById("min").value) || 0;
  let segundos = parseInt(document.getElementById("sec").value) || 0;
  let total = minutos * 60 + segundos;

  const display = document.getElementById("display");

  if (total <= 0) {
    display.innerHTML = "Por favor, insira um tempo válido.";
    return;
  }

  atualizarDisplay(total);

  intervalo = setInterval(() => {
    total--;

    if (total <= 0) {
      clearInterval(intervalo);
      display.innerHTML = "⏰ Tempo esgotado!";
    } else {
      atualizarDisplay(total);
    }
  }, 1000);
}

function atualizarDisplay(segundosTotais) {
  const min = Math.floor(segundosTotais / 60);
  const sec = segundosTotais % 60;
  const display = document.getElementById("display");

  display.innerHTML = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

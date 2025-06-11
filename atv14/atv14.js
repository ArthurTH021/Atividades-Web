let segundos = 0;
let intervalo = null;

function atualizarDisplay() {
  const min = String(Math.floor(segundos / 60)).padStart(2, '0');
  const sec = String(segundos % 60).padStart(2, '0');
  document.getElementById('timer').textContent = `${min}:${sec}`;
}

function iniciar() {
  if (!intervalo) {
    intervalo = setInterval(() => {
      segundos++;
      atualizarDisplay();
    }, 1000);
  }
}

function pausar() {
  clearInterval(intervalo);
  intervalo = null;
}

function resetar() {
  pausar();
  segundos = 0;
  atualizarDisplay();
}

document.getElementById('startBtn').addEventListener('click', iniciar);
document.getElementById('pauseBtn').addEventListener('click', pausar);
document.getElementById('resetBtn').addEventListener('click', resetar);
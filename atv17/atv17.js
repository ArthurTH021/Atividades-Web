function mostrarGaleria() {
    document.getElementById('telaInicial').style.display = 'none';
    document.getElementById('galeria').style.display = 'flex';
    document.getElementById('botoesFiltro').style.display = 'flex';

    // Ao abrir, mostra todas as imagens
    const imagens = document.querySelectorAll('.galeria img');
    imagens.forEach(imagem => {
        imagem.classList.remove('esconder');
    });
}

function filtrar(categoria) {
    const imagens = document.querySelectorAll('.galeria img');

    imagens.forEach(imagem => {
        if (imagem.classList.contains(categoria)) {
            imagem.classList.remove('esconder');
        } else {
            imagem.classList.add('esconder');
        }
    });
}

function voltarInicio() {
    document.getElementById('telaInicial').style.display = 'block';
    document.getElementById('galeria').style.display = 'none';
    document.getElementById('botoesFiltro').style.display = 'none';
}



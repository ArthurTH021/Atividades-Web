function validarFormulario() {
    const nome = document.getElementById("usuario").value.trim();
    const ra = document.getElementById("RA").value.trim();

    if (nome === "" || ra === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    alert(`Bem-vindo(a), ${nome}! Seu R.A é ${ra}.`);
    return false; // Remova isso para permitir o envio real
}

    
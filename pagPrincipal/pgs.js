// Adicione isso ao seu script, após o login ser realizado
function mostrarUsuario(nome, ra) {
    document.getElementById('loginForm').innerHTML = `
        <p>Bem-vindo, <strong>${nome}</strong></p>
    `;
}
// Exemplo de uso após login:
mostrarUsuario(user);
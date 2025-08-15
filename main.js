const form = document.getElementById('form-campo');
const mensagem = document.querySelector('.message');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');

    const valorA = Number(campoA.value);
    const valorB = Number(campoB.value);

    // Sempre limpa antes de mostrar nova mensagem
    mensagem.style.display = 'none';
    mensagem.className = 'message';
    mensagem.innerHTML = '';

    const mensagemSucesso = `O campo B <b>${valorB}</b> é maior que o campo A: <b>${valorA}</b>`;
    const mensagemError = `O campo B <b>${valorB}</b> é menor ou igual ao campo A: <b>${valorA}</b>`;

    if (valorB > valorA) {
        mensagem.classList.add('success-message');
        mensagem.innerHTML = mensagemSucesso;
    } else {
        mensagem.classList.add('error-message');
        mensagem.innerHTML = mensagemError;
    }

    mensagem.style.display = 'block';
});


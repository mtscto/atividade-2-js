const form = document.getElementById('form-campo');
const mensagem = document.querySelector('.message');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');

    // Sempre limpa antes de mostrar nova mensagem
    mensagem.style.display = 'none';
    mensagem.className = 'message';
    mensagem.innerHTML = '';

    const mensagemSucesso = `O campo B: <b>${campoB.value}</b> é maior que o campo A: <b>${campoA.value}</b>`;
    const mensagemError = `O campo B: <b>${campoB.value}</b> é menor ou igual ao campo A: <b>${campoA.value}</b>`;
    const mensagemBug = `O campo B:${campoB.value} e o campo A: ${campoA.value} são iguais, tente novamente.`

    if (campoB.value > campoA.value) {
        mensagem.classList.add('success-message');
        mensagem.innerHTML = mensagemSucesso;
    } else if (campoB.value == campoA.value) {
        mensagem.classList.add('bug-message');
        mensagem.innerHTML = mensagemBug;
    } else {
        mensagem.classList.add('error-message');
        mensagem.innerHTML = mensagemError;
    }

    mensagem.style.display = 'block';
});


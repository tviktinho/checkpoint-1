// Seleciona o formulário de cadastro
const form = document.querySelector('#cadastro-form');

// Adiciona um listener para o evento submit do formulário
form.addEventListener('submit', (event) => {
    // Impede o envio do formulário
    event.preventDefault();

    // Seleciona os campos do formulário
    const nome = form.querySelector('#nome').value;
    const email = form.querySelector('#email').value;
    const senha = form.querySelector('#senha').value;

    // Verifica se os campos estão preenchidos
    if (!nome || !email || !senha) {
        // Exibe mensagem de erro se algum campo estiver vazio
        alert('Por favor, preencha todos os campos!');
    } else {
        // Envia o formulário se os campos estiverem preenchidos
        form.submit();
    }
});

function cadastrar() {
    // Seleciona os campos de cadastro
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;

    // Verifica se os campos estão preenchidos
    if (!nome || !email || !senha) {
        // Exibe mensagem de erro se algum campo estiver vazio
        alert('Por favor, preencha todos os campos');
        return;
    }

    // Verifica se o email é válido
    if (!/\S+@\S+\.\S+/.test(email)) {
        // Exibe mensagem de erro se o email for inválido
        alert('Por favor, digite um endereço de email válido');
        return;
    }

    // Envia o formulário de cadastro para o PHP
    const form = document.querySelector('#cadastro-form');
    form.submit();
}

// Seleciona o botão de cadastro
const cadastroBtn = document.querySelector('#cadastro-btn');

// Adiciona um listener para o evento click do botão
cadastroBtn.addEventListener('click', (event) => {
    // Impede o envio do formulário
    event.preventDefault();

    // Chama a função de cadastro
    cadastrar();
});

function adicionarAoCarrinho(produto) {
    // Envia uma requisição para o arquivo PHP responsável por adicionar o item ao carrinho
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'adicionar_carrinho.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('Item adicionado ao carrinho com sucesso!');
        }
    };
    xhr.send('produto=' + produto);
}

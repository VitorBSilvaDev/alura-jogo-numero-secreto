let listaNumeroSorteado = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
boasVindas();

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Secret number game';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        let mensagemTentativas = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemSucesso = `Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${mensagemTentativas}`

        exibirTextoNaTela('h1', 'CORRETO!');
        exibirTextoNaTela('p', mensagemSucesso);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        exibirTextoNaTela('h1', 'ERRADO!')
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor que ' + chute)
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior que ' + chute)
        }
    }
    tentativas++;
    limparCampo();
}


// 2) Função sem parâmetro com retorno
function gerarNumeroAleatorio() {
    let numeroLimite = 10;
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeNumeroSorteado = listaNumeroSorteado.length;
    console.log(quantidadeNumeroSorteado);

    if (quantidadeNumeroSorteado == numeroLimite) {
        listaNumeroSorteado = [];
    }
    // 3) Função recursiva = Chama a si mesma
    if (listaNumeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumeroSorteado.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

// 1) Refatorando o código para código mais flexível e reutilizável

function boasVindas() {
    exibirTextoNaTela('h1', 'Secret Number Game');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}



function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
// 1...

function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = "";
}

function novoJogo() {
    boasVindas();
    limparCampo();

    chute = 0;
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}



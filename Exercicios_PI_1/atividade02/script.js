// ---------------- Utils ------------------------------------

function getById(id) {
    return document.getElementById(id);
}

function getBotaoClicavel(id, funcao) {
    getById(id).addEventListener('click', funcao);
    return getById(id);
}

// ----------------------------------------------------------

// ---------------- Questão 1 -------------------------------

let botaoDeErro = getBotaoClicavel('botaoErro', function() {
    criarErro('mensagemErro', 'O campo deve ser preenchido');
});

function criarErro(id, mensagem) {
    let mensagemDeErro = getById(id);
    
    mensagemDeErro.textContent = mensagem;
    mensagemDeErro.classList.remove('oculto');

    setTimeout(function() {
        mensagemDeErro.classList.add('oculto');
        mensagemDeErro.textContent = '';
    }, 3000);
}

// ----------------------------------------------------------

// ---------------- Questão 2 -------------------------------

let botaoExibir = getBotaoClicavel('botaoExibir', exibirConteudo);

function exibirConteudo() {
    let conteudoDigitado = getById('caixaDeTexto').value.trim();
    let conteudoExibir = getById('conteudo');

    if (conteudoDigitado != '') {
        conteudoExibir.innerHTML = conteudoDigitado;
        conteudoExibir.classList.remove('oculto');
    } else {
        criarErro('conteudo', 'O campo deve ser preenchido');
    }
}

// ----------------------------------------------------------

// ---------------- Questão 3 -------------------------------

let botaoCalcular = getBotaoClicavel('botaoCalcular', exibirResultado);

function exibirResultado() {
    let interacoes = getById('numInteracoes').value.trim();
    let visualizacoes = getById('numVisualizacoes').value.trim();
    let resultado = getById('resultado');

    if (interacoes != '' && visualizacoes != '') {
        let numInt = parseFloat(interacoes);
        let numVis = parseFloat(visualizacoes);

        if (isNaN(numInt) || isNaN(numVis)) {
            criarErro('resultado', 'Digite apenas números. Ex: 235.333');
        } else {
            let engajamento = (numInt / numVis) * 100;
            resultado.innerHTML = 'Total de engajamento foi: ' + engajamento;
            resultado.classList.remove('oculto');
        }
    } else {
        criarErro('resultado', 'Ambos os campos devem ser preenchidos');
    }
}

// ----------------------------------------------------------


// ---------------- Utils ------------------------------------

function getById(id) {
    return document.getElementById(id);
}

function getByName(id) {
    return document.getElementsByName(id);
}

function getBotaoClicavel(id, funcao) {
    getById(id).addEventListener('click', funcao);
    return getById(id);
}

function getSelectClicavel(id, funcao) {
    getById(id).addEventListener('change', funcao);
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
        criarErro('mensagemErro2', 'O campo deve ser preenchido');
    }
}

// ----------------------------------------------------------

// ---------------- Questão 3 -------------------------------

let botaoCalcular = getBotaoClicavel('botaoCalcular', exibirResultado);

function exibirResultado() {
    let interacoes = getById('numInteracoes').value.trim();
    let visualizacoes = getById('numVisualizacoes').value.trim();
    let resultado = getById('resultado1');

    if (interacoes != '' && visualizacoes != '') {
        let numInt = parseFloat(interacoes);
        let numVis = parseFloat(visualizacoes);

        if (isNaN(numInt) || isNaN(numVis)) {
            criarErro('mensagemErro3', 'Digite apenas números. Ex: 235.333');
        } else {
            let engajamento = (numInt / numVis) * 100;
            resultado.innerHTML = `Total de Engajamento: ${engajamento}`;
            resultado.classList.remove('oculto');
        }
    } else {
        criarErro('mensagemErro3', 'Ambos os campos devem ser preenchidos');
    }
}

// ----------------------------------------------------------

// ---------------- Questão 4 -------------------------------
let botaoCarregar = getBotaoClicavel('botaoImagem', exibirImagem);

function exibirImagem() {
    let imagem = getById('uploadImagem');
    const arquivoSelecionado = imagem.files[0];

    let img = document.createElement('img');
    img.src = URL.createObjectURL(arquivoSelecionado);

    getById('resultado2').appendChild(img);
}
// ----------------------------------------------------------

// ---------------- Questão 5 -------------------------------
let selecionarImagem = getSelectClicavel('imagens', exibirSelecionada);

function exibirSelecionada() {
    let select = getById('imagens');
    let opcaoSelecionada = select.value;
    let resultado = getById('resultado3');

    resultado.innerHTML = '';

    let img = document.createElement('img');
    let imagemEncontrada = false;
    
    if (opcaoSelecionada === 'rosa') {
        img.src = 'https://equilibrioaquarismo.com.br//uploads/produtos/765/4f1d84ae-8da9-4f3a-a244-4d13d6f5d34a-planta-onze-horas-rosa-pesquisa-google-opera.jpg';
        imagemEncontrada = true;
    } else if (opcaoSelecionada === 'branca') {
        img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNVzz-hWa-YirNTFEkmQ4YCBYBPW2ya6ZUXQ&s';
        imagemEncontrada = true;
    } else if (opcaoSelecionada === 'amarela') {
        img.src = 'https://bepage.com.br/wp-content/uploads/2024/11/FLOR-ONZE-HORAS-AMARELA-1024x683.webp';
        imagemEncontrada = true;
    }

    if (imagemEncontrada) {
        resultado.appendChild(img);
        resultado.classList.remove('oculto');
    }
}
// ----------------------------------------------------------

// ---------------- Questão 6 -------------------------------

let botaoEnviar = getBotaoClicavel('botaoEnviar', exibirMarcados);

function exibirMarcados() {
    const checkboxes = getByName('redesSociais');
    let redesSelecionadas = [];

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            redesSelecionadas.push(checkboxes[i].value);
        }
    }

    let resultado = getById('redesSelecionadas');
    resultado.innerHTML = '';

    if (redesSelecionadas.length > 0) {
        resultado.innerHTML = `Redes sociais selecionadas: ${redesSelecionadas.join(', ')}`;
        resultado.classList.remove('oculto');
    } else {
        criarErro('mensagemErro4', 'Por favor, selecione ao menos alguma rede!');
    }
}

// ----------------------------------------------------------

// ---------------- Questão 7 e 8 -------------------------------

let botaoListar = getBotaoClicavel('botaoListar', criarSelect);

function criarSelect() {
    let caixaHastag = getById('caixaDeHastag');
    let hastag = caixaHastag.value.trim();
    let meuSelect = getById('selectHastag');

    if (hastag === '') {
        criarErro('mensagemErro5', 'Digite alguma Hashtag para adicionar a lista!');
        return;
    }

    if (hastag.length <= 2) {
        criarErro('mensagemErro5', 'Digite um Hastag com mais de 2 caracteres!');
        return;
    }

    if (meuSelect.options.length >= 5) {
        criarErro('mensagemErro5', 'A lista de hashtags já atingiu o limite de 5 itens.');
        return;
    }

    let repetida = false;
    for (let i = 0; i < meuSelect.options.length; i++) {
        if (meuSelect.options[i].value.toLowerCase() === hastag.toLowerCase()) {
            repetida = true;
            break;
        }
    }
    if (repetida) {
        criarErro('mensagemErro5', 'Essa hashtag já foi adicionada. Digite Hastags Diferentes!');
        return;
    }

    let novoItemLista = document.createElement('option');
    novoItemLista.textContent = hastag;
    novoItemLista.value = hastag;
    meuSelect.appendChild(novoItemLista);

    caixaHastag.value = '';
}

// ----------------------------------------------------------

// ---------------- Questão 9 -------------------------------

let botaoRemover = getBotaoClicavel('botaoRemover', removerHastag);

function removerHastag() {
    let meuSelect = getById('selectHastag');
    let hastagSelecionada = meuSelect.selectedOptions[0];

    meuSelect.removeChild(hastagSelecionada);
}

// ----------------------------------------------------------

// ---------------- Questão 10 e 11 -------------------------------

let botaoMoverDireita = getBotaoClicavel('moverParaDireitaBtn', function() {
    moverOptions('ativosDisponiveis', 'carteiraInvestimentos');
});
let botaoMoverEsquerda = getBotaoClicavel('moverParaEsquerdaBtn', function() {
    moverOptions('carteiraInvestimentos', 'ativosDisponiveis');
});

function moverOptions(idTransmissor, idReceptor) {
    let selectTransmissor = getById(idTransmissor);
    let selectReceptor = getById(idReceptor);

    if (selectTransmissor.options.length <= 0) {
        criarErro('mensagemErro6', 'A lista está vazia não pode passar para outra!');
        return;
    } else if (selectReceptor.options.length >= 10) {
        criarErro('mensagemErro6', 'A lista que está tentando passar já está cheia!');
        return;
    }

    let itemMovido = selectTransmissor.selectedOptions[0];
    selectReceptor.appendChild(itemMovido);
    selectTransmissor.removeChild(itemMovido);
}

// ----------------------------------------------------------
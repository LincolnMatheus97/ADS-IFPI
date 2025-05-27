function getById(id) {
    return document.getElementById(id);
}

function getByClass(className) {
    return document.getElementsByClassName(className);
}
// ---------------- Questão 3 -------------------------------
let paragrafo = getById("divParagrafo");
let arrParagrafo = paragrafo.children;
let resultadoParagrafos = getById("contParagrafo");
let totalParagrafos = 0;

for (let i = 1; i <= arrParagrafo.length; i++) {
    totalParagrafos++;

}

resultadoParagrafos.innerText = `Existem um total de: ${totalParagrafos} parágrafos.`;

// ----------------------------------------------------------

// ---------------- Questão 4 -------------------------------

let botaoAlt = getById("botao01");
botaoAlt.addEventListener("click", function () {
    var paragrafo = getById("paragrafoAlt");

    paragrafo.textContent = "O texto desse parágrafo foi alterado!";
});

let botaoDel = getById("botao02");
botaoDel.addEventListener("click", function () {
    var paragrafo = getById("paragrafoDel");

    paragrafo.textContent = "";
});

// ----------------------------------------------------------

// ---------------- Questão 6 -------------------------------

let botaoColor = getById("botao03");
botaoColor.addEventListener("click", function () {
    var paragrafo = getById("paragrafoColor");

    paragrafo.style.color = 'green';
});

// ----------------------------------------------------------

// ---------------- Questão 7 -------------------------------

let botaoCop = getById("botao04");
botaoCop.addEventListener("click", function () {
    let textoOriginal = getById("texto").value;
    let textoMaiusculo = textoOriginal.toUpperCase();

    getById("copiaCaixaAlta").textContent = textoMaiusculo;
});

// ----------------------------------------------------------

// ---------------- Questão 8 -------------------------------

let mudarCor = getById("mudarCor");
mudarCor.addEventListener('click', function () {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
});

let retornaCor = getById("retornarCor");
retornaCor.addEventListener('click', function () {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
});

// ----------------------------------------------------------

// ---------------- Questão 9 -------------------------------

let aumentarTam = getById("aumentarTam");
const incremento = 2;

aumentarTam.addEventListener('click', function () {
    const corpo = document.body;
    const estiloAtual = window.getComputedStyle(corpo, null);

    let tamanhoAtual = estiloAtual.getPropertyValue('font-size');
    let tamanhoNumerico = parseFloat(tamanhoAtual);


    let novoTamanho = tamanhoNumerico + incremento;
    corpo.style.fontSize = novoTamanho + 'px';
});

let diminuirTam = getById("diminuirTam");
const decremento = 2;

diminuirTam.addEventListener('click', function() {
    const corpo = document.body;
    const estiloAtual = window.getComputedStyle(corpo, null);


    let tamanhoAtual = estiloAtual.getPropertyValue('font-size');
    let tamanhoNumerico = parseFloat(tamanhoAtual);

    let novoTamanho = tamanhoNumerico - decremento;
    corpo.style.fontSize = novoTamanho + 'px';
})

// -----------------------------------------------------------

// ---------------- Questão 10 -------------------------------

let inputNumero1 = getById("numero1");
let inputNumero2 = getById("numero2");
let selectOperacoes = getById("operacoes");
let botaoCalcular = getById("botaoCalcular");
let pResultado = getById("resultadoCalculado");

botaoCalcular.addEventListener("click", function() {
    let valor1 = inputNumero1.value;
    let valor2 = inputNumero2.value;
    let operacao = selectOperacoes.value;

    let num1 = parseFloat(valor1);
    let num2 = parseFloat(valor2);

    let resultado; 
    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Por favor, insira números válidos.";
    } else {
        switch (operacao) {
            case "Somar":
                resultado = num1 + num2;
                break;
            case "Diminuir":
                resultado = num1 - num2;
                break;
            case "Multiplicar":
                resultado = num1 * num2;
                break;
            case "Dividir":
                if (num2 === 0) {
                    resultado = "Erro: Divisão por zero!";
                } else {
                    resultado = num1 / num2;
                }
                break;
            default:
                resultado = "Operação desconhecida.";
        }
    }

    pResultado.textContent = "Resultado: " + resultado; 
});

// ----------------------------------------------------------

// ---------------- Questão 11 -------------------------------

let inputItem = getById("novoItemInput");
let botaoAdd = getById("botao05");
let listaUl = getById("minhaLista");

botaoAdd.addEventListener("click", function() {
    let textoDoItem = inputItem.value;
    if (textoDoItem.trim() === "") {
        alert("Digite algo para adicionar!");
        inputItem.focus();
        return;
    }

    let novoItem = document.createElement("li");
    novoItem.textContent = textoDoItem;
    listaUl.appendChild(novoItem);

    inputItem.value = "";
    inputItem.focus();
});

// -----------------------------------------------------------

// ---------------- Questão 12 -------------------------------

let inputItemSelect = getById("itemParaSelect");
let botaoAdicionar = getById("botaoAddOption");
let meuSelect = getById("meuSelect");

botaoAdicionar.addEventListener("click", function() {
    let textoDoItem = inputItemSelect.value.trim();

    if (textoDoItem === "") {
        alert("Digite algo!");
        inputItemSelect.focus();
        return;
    }

    let novaOpcao = document.createElement("option");

    novaOpcao.textContent = textoDoItem;
    novaOpcao.value = textoDoItem;

    meuSelect.appendChild(novaOpcao);

    inputItemSelect.value = "";
    inputItemSelect.focus();
});

// -----------------------------------------------------------
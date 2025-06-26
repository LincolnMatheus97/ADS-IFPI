function getById(id) {
    return document.getElementById(id);
}

let botaoSolicitar = getById('botaoSolicitar');

botaoSolicitar.addEventListener('click', solicitarConselho);

async function solicitarConselho() {
    let url = 'https://api.adviceslip.com/advice';

    try {
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        let json = await response.json();
        getById('conselho').innerText = json.slip.advice;
        // getById('conselho').innerText = json["slip"]["advice"];

    } catch (e) {
        getById('erroConselho').innerText = "Erro ao solicitar conselho";
        console.log(e.message);
    }
}

let botaoPesquisarPais = getById('botaoPesquisarPais');

botaoPesquisarPais.addEventListener('click', pesquisarPais);

async function pesquisarPais() {
    let url = 'https://restcountries.com/v3.1/name/';

    try {
        let nomePais = getById('nomePais').value;
        url += nomePais;

        let response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        let json = await response.json();

        getById('bandeira').src = json[0].flags.png;
        getById('bandeira').alt = json[0].flags.alt;
        getById('nomeOficial').innerText = json[0].name.official;
        getById('erroPais').innerText = '';
    } catch (e) {
        getById('erroPais').innerText = "Erro ao pesquisar Pais";
        console.log(e.message);
    }
}
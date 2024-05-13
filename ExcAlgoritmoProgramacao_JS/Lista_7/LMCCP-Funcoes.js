export function calcularVelocidadeEmKm(ms) {
    return ms * 3.6;
}

export function determinarMinutos(hora, minuto) {
    return (hora * 60) + minuto;
}

export function determinarEmReal(dolares) {
    return dolares * 5.15;
}

export function calcularVelocidadeEmMs(km) {
    return km / 3.6;
}

export function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

export function calcularAreaQuadrado(lado) {
    return lado ** 2;
}

export function calcularAreaRetangulo(base, altura) {
    return base * altura;
}

export function determinarComprimentoCircunferencia(raio) {
    return 2 * 3.14 * raio;
}

export function calcularVolumeEsfera(raio) {
    return (4 * 3.14 * (raio) ** 3) / 3;
}

export function determinarTemperaturaFahrenheit(celsius) {
    return (9 * celsius + 150) / 5;
}

export function determinarTemperaturaCelsius(fahrenheit) {
    return (5 * fahrenheit - 160) / 9;
}

export function calcularFatorial(numero) {
    let n = 1;

    for(numero; numero >= 1; numero--) {
        n *= numero;
    }
    return n;
}

export function ehPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

export function ehValida(ano, mes, dia) {
    if (mes < 1 && mes > 12) {
        return false;
    }
    const diasmes = diasNoMes(mes, ano);
    if (dia < 1 || dia > diasmes) {
        return false;
    }
    return true;

    function diasNoMes(dt_mes, dt_ano) {
        if (dt_mes === 2) {
            return ano_bissexto(dt_ano) ? 29 : 28;
        } else {
            return (dt_mes === 4 || dt_mes === 6 || dt_mes === 9 || dt_mes === 11) ? 30 : 31;
        }
    }

    function ano_bissexto(dt_ano) {
        return (dt_ano % 4 === 0 && (dt_ano % 100 !== 0 || dt_ano % 400 === 0));
    }
}

export function calcularMMC(numero1, numero2) {
    let maximo = Math.max(numero1, numero2);
    let valor = 0;

    while(maximo % numero1 !== 0 && maximo % numero2 !== 0) {
        valor = maximo;
        maximo++;
    }

    return valor;
}

export function calcularMDC(numero1, numero2) {
    let minimo = Math.min(numero1, numero2);
    let valor = 0;

    while(minimo % numero1 !== 0 && minimo % numero2 !== 0) {
        valor = minimo;
        minimo++;
    }

    return valor;
}

export function ehAnoBissexto(ano) {
    return (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0));
}

export function criarLinhaVertical(numeroLinhas) {
    let mensagem = ``;

    for(let i = 0; i < numeroLinhas; i++) {
        mensagem += `|\n`    
    }
    return mensagem;
}

export function criarLinhaHorizontal(numeroLinhas) {
    let mensagem = ``;

    for(let i = 0; i < numeroLinhas; i++) {
        mensagem += `_`    
    }
    return mensagem;
}

export function criarMoldura(linha, coluna) {
    let linhas = ``;
    let colunas = ``;
    let espacamento = ``;

    for(let i = 0; i < linha; i++) {
        if(i === linha - 1) {
            linhas += `-` + `\n`;
        }else {
            linhas += `-`;
        }

        if(i < linha - 2) {
            espacamento += ` `;
        }

    }

    for(let j = 0; j < coluna; j++) {
        colunas += `|` + espacamento + `|` + `\n`;
    }
    return linhas + colunas + linhas;

}
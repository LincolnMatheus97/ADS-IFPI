import { getNumber, getText, print } from './utils.js';

// Cria uma Tarefa
function criarTarefa(nome, ingresso, duracao) {
    return {
        nome,
        ingresso,
        duracao,
        tempo_restante: duracao,
        tempoDeVida: 0,
        tempoDeEspera: 0,
        preempcoes: []
    };
}

// Busca e calcula o tempo de vida de uma tarefa
function calcularTempoDeVida(tarefas, nome_da_tarefa, tempo_de_encerramento) {
    for (let tarefa of tarefas) {
        if (tarefa.nome === nome_da_tarefa) {
            tarefa.tempoDeVida = tempo_de_encerramento - tarefa.ingresso;
        }
    }
}

// Calcula o tempo de espera de uma tarefa
function calcularTempoDeEspera(tarefas, nome_da_tarefa) {
    for (let tarefa of tarefas) {
        if (tarefa.nome === nome_da_tarefa) {
            // Calcula o tempo de espera da tarefa baseado no seus tempos de preempcoes 
            let indice_atual = 0;
            for (let preempcao of tarefa.preempcoes) {
                // Se for a primeira preempção, o tempo de espera é o tempo de início da tarefa menos o tempo de ingresso
                if (indice_atual === 0) {
                    tarefa.tempoDeEspera += preempcao.tempo_de_inicio - tarefa.ingresso;
                } else {
                    // Se não for a primeira preempção, o tempo de espera é o tempo de início da preempção menos o tempo de encerramento da preempção anterior
                    tarefa.tempoDeEspera += preempcao.tempo_de_inicio - tarefa.preempcoes[indice_atual - 1].tempo_de_encerramento;
                }
                indice_atual++;
            }
        }
    }
}

// Busco e registro as preempções de uma tarefa
function registrarPreempcoes(tarefas, nome_da_tarefa, tempo_de_inicio, tempo_de_encerramento) {
    for (let tarefa of tarefas) {
        if (tarefa.nome === nome_da_tarefa) {
            tarefa.preempcoes.push({ tempo_de_inicio, tempo_de_encerramento });
        }
    }
}

function escalonamentoRR(tarefas, quantum, troca_de_contexto) {
    let tempo_total = 0; // Tempo total de execução
    let fila = [...tarefas]; // Fila de tarefas

    while (fila.length > 0) { // Enquanto houver tarefas na fila
        let tarefa = fila.shift(); // Remove a primeira tarefa da fila
        let tempo_executado = Math.min(quantum, tarefa.tempo_restante); // Calcula o tempo que a tarefa será executada
        let tempo_inicial = tempo_total; // Guarda o tempo inicial da tarefa
        tarefa.tempo_restante -= tempo_executado; // Atualiza o tempo restante da tarefa
        tempo_total += tempo_executado + troca_de_contexto; // Atualiza o tempo total
        
        print(`Tarefa: ${tarefa.nome} // Tempo Inicio -> ${tempo_inicial}  Tempo Final -> ${tempo_total - troca_de_contexto}: (Restante: ${tarefa.tempo_restante})`);

        if (fila.length !== 0) {
            print(`Tempo de TC (${troca_de_contexto})...`);
        }

        // Se a tarefa ainda não terminou, ela volta para a fila
        if (tarefa.tempo_restante > 0) {
            fila.push(tarefa);
            registrarPreempcoes(tarefas, tarefa.nome, tempo_inicial, tempo_total - troca_de_contexto);
            // Se a tarefa terminou, calcula o tempo de vida e de espera
        } else {
            registrarPreempcoes(tarefas, tarefa.nome, tempo_inicial, tempo_total - troca_de_contexto);
            calcularTempoDeVida(tarefas, tarefa.nome, tempo_total - troca_de_contexto);
            calcularTempoDeEspera(tarefas, tarefa.nome);
        }
    }

    print(`\n----------------------------------------`);
    // Exibe o tempo de vida e de espera de cada tarefa
    tarefas.sort((a, b) => a.nome.localeCompare(b.nome));
    for (let tarefa of tarefas) {
        print(`${tarefa.nome} - Tempo de vida: ${tarefa.tempoDeVida} - Tempo de espera: ${tarefa.tempoDeEspera}`);
    }

    print(`\n----------------------------------------`);
    // Calcula a média de vida e de espera das tarefas
    let mediaVida = tarefas.reduce((soma, t) => soma + t.tempoDeVida, 0) / tarefas.length;
    let mediaEspera = tarefas.reduce((soma, t) => soma + t.tempoDeEspera, 0) / tarefas.length;

    print(`\nTempo médio de vida das tarefas: ${mediaVida}`);
    print(`Tempo médio de espera das tarefas: ${mediaEspera}`);
    print(`\n----------------------------------------`);
}

function main() {
    let tarefas = [];
    print("---- Escalonador Round-Robin ----");
    let quantidade_tarefas = getNumber("Digite a quantidade de tarefas: ");
    for (let i = 0; i < quantidade_tarefas; i++) {
        let nome = getText("Digite o nome da tarefa: ");
        let ingresso = getNumber("Digite o tempo de ingresso: ");
        let duracao = getNumber("Digite a duracao: ");
        tarefas.push(criarTarefa(nome, ingresso, duracao));
    }
    print("\n--------------------------------");
    let quantum = getNumber("Digite o quantum: ");
    let troca_de_contexto = getNumber("Digite o tempo de troca de contexto: ");
    print("\n--------------------------------");
    tarefas.sort((a, b) => a.ingresso - b.ingresso);
    escalonamentoRR(tarefas, quantum, troca_de_contexto);
}

main();
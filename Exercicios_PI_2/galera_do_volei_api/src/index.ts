import express, { type Request, type Response } from 'express';
import { z } from 'zod';

const app = express();
app.use(express.json());

// --- Schemas ---
type Jogador = {
    id: number;
    nome: string;
    moderador: boolean;
    sexo: string;
    categoria: string;
};

type Remetente = {
    id_remetente: number;
    nome_remetente: string;
};

type Destinatario = {
    id_destinatario: number;
    nome_destinatario: string;
};

type Convite = {
    id: number;
    status: boolean;
    remetente: Remetente;
    destinatario: Destinatario;
    id_partida: number;
};

type Moderador = {
    id_moderador: number;
    nome_moderador: string;
};

type Partida = {
    id: number;
    tipo: string;
    data: Date;
    situacao: string;
    moderador: Moderador;
    participantes: object[];
}

// --- Dados Fakes baseados nos meus schemas ---
let jogadores: Jogador[] = [
    { id: 1, nome: "Thalisson", moderador: true, sexo: "Masculino", categoria: "Amador"},
    { id: 2, nome: "Natiele", moderador: false, sexo: "Feminino", categoria: "Intermediario"}
];
let partidas: Partida[] = [
    { id: 1, tipo: "Amador", data: new Date, situacao: "Aberta", 
        moderador: {id_moderador: 1, nome_moderador: "Thalisson"}, participantes: []}
];
let convites: Convite[] = [
    { id: 1, status: false, remetente: {id_remetente: 1, nome_remetente: "Thalisson"}, 
    destinatario: {id_destinatario: 2, nome_destinatario: "Natiele"}, id_partida: 1}
];

// --- EndPoints ---

// [GET] /jogadores - Listar Jogadores
app.get('/jogadores', (req: Request, res: Response) => {
    // Retorno simples, sem filtro ou paginação
    res.status(200).json(jogadores);
});

// [POST] /jogadores - Criar Jogadores (com validação)
const criarJogadorSchema = z.object({
    nome: z.string().min(3, { message: "O nome é obrigatório e deve ter ao menos 3 caracteres." }),
    sexo: z.string({ message: "O sexo é obrigatório." }),
    categoria: z.string({ message: "A categoria é obrigatória." })
});

app.post('/jogadores', (req: Request, res: Response) => {
    try {
        const data = criarJogadorSchema.parse(req.body);

        const novoJogador = {
            id: jogadores.length + 1,
            nome: data.nome,
            moderador: false,
            sexo: data.sexo,
            categoria: data.categoria
        };

        jogadores.push(novoJogador);
        res.status(201).json(novoJogador);

    } catch (error) {
        res.status(400).json({message: "Dados inválidos", erros: error});
    }
});

// [DELETE] /jogadores/:id - Deletar jogador
app.delete('/jogadores/:id', (req: Request, res: Response) => {
    const idParam = req.params.id ?? '';
    const idParaDeletar = parseInt(idParam, 10);
    
    if (isNaN(idParaDeletar)) {
        return res.status(400).json({message: "ID inválido. Por favor digite um ID válido"});
    }

    const jogadorIndex = jogadores.findIndex(jog => jog.id === idParaDeletar);

    if (jogadorIndex === -1) {
        return res.status(404).json({message: "Jogador não encontrado!"});
    }

    jogadores.splice(jogadorIndex, 1);
    console.log(`Jogador com id ${idParaDeletar} deletado`);

    res.status(204).send();
});

// [PATCH] /jogadores/:id - Atualizar dados do jogador OU moderação (com validação)
const edtDadosBasicosJogadorSchema = z.object({
    nome: z.string().min(3).optional(),
    sexo: z.string().optional(),
    categoria: z.string().optional()
});

const edtModeracaoJogadorSchema = z.object({
    moderador: z.boolean()
});

app.patch('/jogadores/:id', (req: Request, res: Response) => {
    const idParam = req.params.id ?? '';
    const idParaAtualizar = parseInt(idParam, 10);

    if (isNaN(idParaAtualizar)) {
        return res.status(400).json({message: "ID inválido. Por favor digite um ID válido"});
    }

    const jogadorIndex = jogadores.findIndex(jog => jog.id === idParaAtualizar);

    if (jogadorIndex === -1) {
        return res.status(404).json({message: "Jogador não encontrado!"});
    }

    try {
        const data = edtDadosBasicosJogadorSchema.parse(req.body);
        const jogadorAtualizado = jogadores[jogadorIndex]!;

        jogadorAtualizado.nome = data.nome ?? jogadorAtualizado.nome;
        jogadorAtualizado.sexo = data.sexo ?? jogadorAtualizado.sexo;
        jogadorAtualizado.categoria = data.categoria ?? jogadorAtualizado.categoria;

        res.status(200).json(jogadorAtualizado);
    } catch (error) {
        res.status(400).json({ message: "Dados inválidos", erros: error });
    }
});

app.patch('/jogadores/:id/moderador', (req: Request, res: Response) => {
    const idParam = req.params.id ?? '';
    const idParaAtualizar = parseInt(idParam, 10);

    if (isNaN(idParaAtualizar)) {
        return res.status(400).json({message: "ID inválido. Por favor digite um ID válido"});
    }

    const jogadorIndex = jogadores.findIndex(jog => jog.id === idParaAtualizar);

    if (jogadorIndex === -1) {
        return res.status(404).json({message: "Jogador não encontrado!"});
    }

    try {
        const data = edtModeracaoJogadorSchema.parse(req.body);
        const jogadorAtualizado = jogadores[jogadorIndex]!;

        jogadorAtualizado.moderador = data.moderador;

        res.status(200).json(jogadorAtualizado);
    } catch (error) {
        res.status(400).json({ message: "Dados inválidos", erros: error });
    }
});

// [GET] /convites - Listar convites
app.get('/convites', (req: Request, res: Response) => {
    res.status(200).json(convites);
});

// [POST] /convites - Criar convite (com verificação)
const criarConviteSchema = z.object({
    nome_remetente: z.string(),
    nome_destinatario: z.string()
});

app.post('/convites', (req: Request, res: Response) => {
    try {
        const data = criarConviteSchema.parse(req.body);

        const remetenteIndex = jogadores.findIndex(jog => jog.nome === data.nome_remetente);
        const destinatarioIndex = jogadores.findIndex(jog => jog.nome === data.nome_destinatario);
        const partidaIndex = partidas.findIndex(part => part.moderador.nome_moderador === data.nome_remetente);

        if (remetenteIndex === -1 || !jogadores[remetenteIndex]) {
            return res.status(404).json({ message: "Remetente não encontrado." });
        }

        if (destinatarioIndex === -1 || !jogadores[destinatarioIndex]) {
            return res.status(404).json({ message: "Destinatario não encontrado." });
        }

        const novoConvite = {
            id: convites.length + 1,
            status: false,
            remetente: {
                id_remetente: jogadores[remetenteIndex].id,
                nome_remetente: data.nome_remetente
            },
            destinatario: {
                id_destinatario: jogadores[destinatarioIndex].id,
                nome_destinatario: data.nome_destinatario
            },
            id_partida: partidaIndex + 1
        };

        convites.push(novoConvite);
        res.status(201).json(novoConvite);
    } catch (error) {
        res.status(400).json({message: "Dados inválidos", erros: error});
    }
});

// [DELETE] /convites/:id - Deletar um convite
app.delete('/convites/:id', (req: Request, res: Response) => {
    const idParam = req.params.id ?? '';
    const idParaDeletar = parseInt(idParam, 10);

    if (isNaN(idParaDeletar)) {
        return res.status(400).json({message: "ID inválido. Por favor digite um ID válido"});
    };

    const conviteIndex = convites.findIndex(conv => conv.id === idParaDeletar);

    if (conviteIndex === -1) {
        return res.status(404).json({message: "Convite não encontrado!"});
    };

    convites.splice(conviteIndex, 1);
    console.log(`Convite com id ${idParaDeletar} deletado`);
    res.status(204).send();
});

// [GET] /partidas - Listar partidas
app.get('/partidas', (req: Request, res: Response) => {
    res.status(200).json(partidas);
});

// [POST] /partidas - Criar uma partida (com validação)
const criarPartidaSchema = z.object({
    tipo: z.string(),
    nome_moderador: z.string()
});

app.post('/partidas', (req: Request, res: Response) => {
    try {
        const data = criarPartidaSchema.parse(req.body);

        const moderadorIndex = jogadores.findIndex(jog => jog.nome === data.nome_moderador);

        if (moderadorIndex === -1 || !jogadores[moderadorIndex]) {
            return res.status(400).json({ message: "Moderador não encontrado." });
        }

        const novaPartida = {
            id: partidas.length + 1,
            tipo: data.tipo,
            data: new Date,
            situacao: "Aberta",
            moderador: {
                id_moderador: jogadores[moderadorIndex].id,
                nome_moderador: data.nome_moderador
            },
            participantes: []
        };

        partidas.push(novaPartida);
        res.status(201).json(novaPartida);

    } catch (error) {
        res.status(400).json({message: "Dados inválidos", erros: error});
    }
});

// [DELETE] /partidas/:id - Deletar uma partida
app.delete('/partidas/:id', (req: Request, res: Response) => {
    const idParam = req.params.id ?? '';
    const idParaDeletar = parseInt(idParam, 10);

    if (isNaN(idParaDeletar)) {
        return res.status(400).json({message: "ID inválido. Por favor digite um ID válido"});
    };

    const partidaIndex = partidas.findIndex(part => part.id === idParaDeletar);

    if (partidaIndex === -1) {
        return res.status(404).json({message: "Partida não encontrada!"});
    };

    partidas.splice(partidaIndex, 1);
    console.log(`Partida de id ${partidaIndex} deletada!`);
    res.status(204).send();
});

// [POST] /partidas/:id/participantes - Adicionar um jogador na partida (com validação)
const addJogadorNaPartidaSchema = z.object({
    nome_jogador: z.string()
});

app.post('/partidas/:id/participantes', (req: Request, res: Response) => {
    const idParam = req.params.id ?? '';
    const idParaAdd = parseInt(idParam, 10);

    if (isNaN(idParaAdd)) {
        return res.status(400).json({message: "ID inválido. Por favor digite um ID válido"});
    };

    const partidaIndex = partidas.findIndex(part => part.id === idParaAdd);

    if (partidaIndex === -1) {
        return res.status(404).json({message: "Partida não encontrada!"});
    };

    try {
        const data = addJogadorNaPartidaSchema.parse(req.body);

        const conviteIndex = convites.findIndex(conv => 
            (conv.remetente.id_remetente === partidas[partidaIndex]?.moderador.id_moderador) 
            && 
            (conv.destinatario.nome_destinatario === data.nome_jogador)
        );

        if (conviteIndex === -1) {
            return res.status(404).json({message: `Convite para o jogador (${data.nome_jogador}) não existe`});
        };

        const jogadorConvidadoIndex = jogadores.findIndex(jog => 
            jog.id === convites[conviteIndex]?.destinatario.id_destinatario
        );

        if (jogadores[jogadorConvidadoIndex]?.categoria != partidas[partidaIndex]?.tipo) {
            return res.status(400).json(
                {message: `O jogador (${data.nome_jogador}) podera ser participar da partida pois não possui a mesma categoria da partida`}
            );
        }

        const novoParticipante = {
            id_jogador: jogadores[jogadorConvidadoIndex]?.id,
            nome_jogador: data.nome_jogador
        };

        partidas[partidaIndex]?.participantes.push(novoParticipante);
        res.status(201).json(partidas[partidaIndex]);

    } catch (error) {
        res.status(400).json({message: "Dados inválidos", erros: error});
    }
});

// [PATCH] /partidas/:id - Atualizar os dados da partida (com validação)
const edtDadosBasicosPartidaSchema = z.object({
    situacao: z.string()
});

app.patch('/partidas/:id', (req: Request, res: Response) => {
    const idParam = req.params.id ?? '';
    const idParaAtualizar = parseInt(idParam, 10);

    if (isNaN(idParaAtualizar)) {
        return res.status(400).json({message: "ID inválido. Por favor digite um ID válido"});
    };

    const partidaIndex = partidas.findIndex(part => part.id === idParaAtualizar);

    if (partidaIndex === -1) {
        return res.status(404).json({message: "Partida não encontrada!"});
    };

    try {
        const data = edtDadosBasicosPartidaSchema.parse(req.body);

        const partidaAtualizada = partidas[partidaIndex]!;

        partidaAtualizada.situacao = data.situacao;

        res.status(200).json(partidaAtualizada);
    } catch (error) {
        res.status(400).json({message: "Dados inválidos", erros: error});
    }
});

// --- Inicialização do Servidor ---
const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
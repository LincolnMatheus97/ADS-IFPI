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

// --- Dados Fake baseados nos meus schemas ---
let jogadores: Jogador[] = [
    { id: 1, nome: "Thalisson", moderador: true, sexo: "Masculino", categoria: "Amador"},
    { id: 2, nome: "Natiele", moderador: false, sexo: "Feminino", categoria: "Intermediario"}
];
let partidas = [];
let convites = [];

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

// --- Inicialização do Servidor ---
const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
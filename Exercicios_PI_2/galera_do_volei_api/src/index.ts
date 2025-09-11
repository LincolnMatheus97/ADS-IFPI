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
    { id: 2, nome: "Natiele", moderador: false, sexo: "Feminino", categoria: "Intermediario"},
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
            id: Date.now(),
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

// --- Inicialização do Servidor ---
const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
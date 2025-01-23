package classes;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class publicacaoAvancada extends publicacao {
    private List<Integer> _interacoes;

    public publicacaoAvancada(int id, String conteudo, Date dataPublicacao, int perfilAssociado, List<Integer> interacoes) {
        super(id, conteudo, dataPublicacao, perfilAssociado); 
        this._interacoes = interacoes;
    }

    public void adicionarInteracao(int idPerfil) {
        this._interacoes.add(idPerfil);
    }

    public List<Integer> listarInteracoes(int idPerfil) {
        List<Integer> interacoesPerfil = new ArrayList<>();
        for (int interacao : this._interacoes) {
            if (interacao == idPerfil) {
                interacoesPerfil.add(interacao);
            }
        }
        return interacoesPerfil;
    }
}

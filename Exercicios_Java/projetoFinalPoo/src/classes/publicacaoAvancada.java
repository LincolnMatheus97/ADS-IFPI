package classes;

import java.util.ArrayList;
import java.util.Date;

public class PublicacaoAvancada extends Publicacao {
    // Atributos
    private ArrayList<Interacao> _interacoes;

    public PublicacaoAvancada(String conteudo, Perfil perfilAssociado, ArrayList<Interacao> interacoes) {
        super(conteudo, perfilAssociado);
        this._interacoes = interacoes;
    }

    public PublicacaoAvancada(int id, String conteudo, Perfil perfilAssociado, Date dataPublicacao, ArrayList<Interacao> interacoes) {
        super(conteudo, perfilAssociado);
        this.setId(id); 
        this.setDataPublicacao(dataPublicacao); 
        this._interacoes = interacoes;
    }

    public void adicionarInteracao(Interacao interacao) {
        if(!this.jaInteragiu(interacao.getPerfilAutor())) {
            this._interacoes.add(interacao);
        }
    }

    public ArrayList<Interacao> listarInteracoes() {
        return new ArrayList<>(this._interacoes);
    }

    public boolean jaInteragiu(Perfil perfil) {
        for (Interacao interacao : this._interacoes) {
            if (interacao.getPerfilAutor().equals(perfil)) {
                return true;
            }
        }
        return false;
    }
}
package classes;

import java.util.Map;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;

public class RedeSocial {
    private ArrayList<Perfil> _perfil;
    private ArrayList<Publicacao> _publicacao;
    private Map<Perfil, Perfil> _pedidosAmizade;

    // Construtor
    public RedeSocial() {
        this._perfil = new ArrayList<Perfil>();
        this._publicacao = new ArrayList<Publicacao>();
        this._pedidosAmizade = new HashMap<Perfil, Perfil>();
    }


    // Métodos de Gerenciamento de Perfis
    public void adicionarPerfil(Perfil perfil) {
        this._perfil.add(perfil);
    }

    public Perfil buscarPerfilPorEmail(String email) {
        for (Perfil perfil : this._perfil) {
            if (perfil.getEmail().equals(email)) {
                return perfil;
            }
        }
        return null;
    }

    public Perfil buscarPerfilPorNome(String nome) {
        for (Perfil perfil : this._perfil) {
            if (perfil.getApelido().equals(nome)) {
                return perfil;
            }
        }
        return null;
    }

    public Perfil buscarPerfilPorId(int id) {
        for (Perfil perfil : this._perfil) {
            if (perfil.getId() == id) {
                return perfil;
            }
        }
        return null;
    }

    public ArrayList<Perfil> listarTodosPerfils() {
        return new ArrayList<Perfil>(this._perfil);
    }

    public void ativarPerfil(Perfil perfil, PerfilAvancado perfilAvancado) {
        perfilAvancado.habilitarPerfil(perfilAvancado);
    }

    public void desativarPerfil(Perfil perfil, PerfilAvancado perfilAvancado) {
        perfilAvancado.desabilitarPerfil(perfilAvancado);      
    }

    // Métodos de Gerenciamento de Publicações
    public void adicionarPublicacao(Publicacao publicacao) {
        this._publicacao.add(publicacao);
    }

    public void adicionarPublicacaoAvancada(PublicacaoAvancada publicacao) {
        this._publicacao.add(publicacao);
    }

    public Publicacao buscarPublicacaoPorId(int id) {
        for (Publicacao publicacao : _publicacao) {
            if (publicacao.getId() == id) {
                return publicacao;
            }
        }
        return null;
    }

    public PublicacaoAvancada transformarPublicacaoEmAvancada(int id) {
        Publicacao publicacao = buscarPublicacaoPorId(id);
        if (publicacao != null && !(publicacao instanceof PublicacaoAvancada)) {
            PublicacaoAvancada publicacaoAvancada = new PublicacaoAvancada(publicacao.getId(), publicacao.getConteudo(), publicacao.getPerfilAssociado(), publicacao.getDataPublicacao(), new ArrayList<Interacao>());
            _publicacao.remove(publicacao);
            _publicacao.add(publicacaoAvancada);
            return publicacaoAvancada;
        }
        return (PublicacaoAvancada) publicacao;
    }

    public ArrayList<Publicacao> listarPublicacoes(Perfil perfil) {
        if (perfil != null) {
            ArrayList<Publicacao> publicacoesPerfil = new ArrayList<>(perfil.listarPostagens());
            Collections.sort(publicacoesPerfil, (publicacaoA, publicacaoB) -> publicacaoA.getDataPublicacao().compareTo(publicacaoB.getDataPublicacao()));
            return publicacoesPerfil;
        } else {
            ArrayList<Publicacao> publicacoesPerfil = new ArrayList<>(this._publicacao);
            Collections.sort(publicacoesPerfil, (publicacaoA, publicacaoB) -> publicacaoA.getDataPublicacao().compareTo(publicacaoB.getDataPublicacao()));
            return publicacoesPerfil;
        }
    }

    // Métodos de Gerenciamento de solicitações de amizade
    public void enviarSolicitacaoAmizade(Perfil perfilSolicitante, Perfil perfilSolicitado) {
        this._pedidosAmizade.put(perfilSolicitante, perfilSolicitado);
    }

    public void aceitarSolicitacaoAmizade(Perfil perfilSolicitante, Perfil perfilSolicitado) {
        this._pedidosAmizade.remove(perfilSolicitante, perfilSolicitado);
        perfilSolicitante.adicionarAmigo(perfilSolicitado);
        perfilSolicitado.adicionarAmigo(perfilSolicitante);
    }

    public ArrayList<Perfil> listarSolicitacoesAmizade(Perfil perfil) {
        ArrayList<Perfil> solicitacoes = new ArrayList<>();
        for (Map.Entry<Perfil, Perfil> solicitacao : this._pedidosAmizade.entrySet()) {
            if (solicitacao.getValue() == perfil) {
                solicitacoes.add(solicitacao.getKey());
            }
        }
        return solicitacoes;
    }

    public void recusarSolicitacaoAmizade(Perfil perfilSolicitante, Perfil perfilSolicitado) {
        this._pedidosAmizade.remove(perfilSolicitante, perfilSolicitado);
    }
    
    // Métodos de Gerenciamento de Interaçôes
    public Boolean adicionarInteracaoAvancada(Perfil perfil, PublicacaoAvancada publicacao, Interacao interacao) {
        for (Interacao interacaoExiste : publicacao.listarInteracoes()) {
            if (interacaoExiste.getPerfilAutor().equals(perfil)) {
                return false;
            }
        }
        publicacao.adicionarInteracao(interacao);
        return true;
    }
}
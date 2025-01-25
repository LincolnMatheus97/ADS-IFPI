package classes;

import java.util.Date;

public class Publicacao {
    // Atributos
    private static int contadorId = 0;
    private int _id;
    private String _conteudo;
    private Date _dataPublicacao;
    private Perfil _perfilAssociado;

    // Construtor
    public Publicacao(String conteudo, Perfil perfilAssociado) {
        this._id = ++contadorId;
        this._conteudo = conteudo;
        this._dataPublicacao = new Date();
        this._perfilAssociado = perfilAssociado;
    }

    // Getters e Setters
    public int getId() {
        return _id;
    }

    public void setId(int id) {
        this._id = id;
    }

    public String getConteudo() {
        return _conteudo;
    }

    public void setConteudo(String conteudo) {
        this._conteudo = conteudo;
    }

    public Date getDataPublicacao() {
        return _dataPublicacao;
    }

    public void setDataPublicacao(Date dataPublicacao) {
        this._dataPublicacao = dataPublicacao;
    }

    public Perfil getPerfilAssociado() {
        return _perfilAssociado;
    }

    public void setPerfilAssociado(Perfil perfilAssociado) {
        this._perfilAssociado = perfilAssociado;
    }
}
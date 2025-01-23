package classes;

import java.util.Date;

public class publicacao {
    // Atributos
    private int _id;
    private String _conteudo;
    private Date _dataPublicacao;
    private int _perfilAssociado;

    // Construtor
    public publicacao(int id, String conteudo, Date dataPublicacao, int perfilAssociado) {
        this._id = id;
        this._conteudo = conteudo;
        this._dataPublicacao = dataPublicacao;
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

    public int getPerfilAssociado() {
        return _perfilAssociado;
    }

    public void setPerfilAssociado(int perfilAssociado) {
        this._perfilAssociado = perfilAssociado;
    }
}

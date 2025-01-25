package classes;

import java.util.ArrayList;

public class Perfil {
    // Atributos
    private static int contadorId = 0;
    private int _id;
    private String _apelido;
    private EmojiConverter _emoji;
    private String _email;
    private boolean _status;
    private ArrayList<Perfil> _amigos;
    private ArrayList<Publicacao> _postagens;

    // Construtor
    public Perfil(String apelido, EmojiConverter emoji, String email) {
        this._id = ++contadorId;
        this._apelido = apelido;
        this._emoji = emoji;
        this._email = email;
        this._status = true;
        this._amigos = new ArrayList<Perfil>();
        this._postagens = new ArrayList<Publicacao>();
    }

    // Getters e Setters
    public int getId() {
        return _id;
    }

    public void setId(int id) {
        this._id = id;
    }

    public String getApelido() {
        return this._apelido;
    }

    public void setApelido(String apelido) {
        this._apelido = apelido;
    }

    public EmojiConverter getEmoji() {
        return this._emoji;
    }

    public void setEmoji(EmojiConverter emoji) {
        this._emoji = emoji;
    }

    public Boolean getStatus() {
        return this._status;
    }

    public void setStatus(Boolean status) {
        this._status = status;
    }

    public String getEmail() {
        return this._email;
    }

    public void setEmail(String email) {
        this._email = email;
    }
    
    // Métodos
    public void adicionarAmigo(Perfil amigo) {
        this._amigos.add(amigo);
    }

    public void removerPostagem(Publicacao postagem) {
        this._postagens.remove(postagem);
    }

    public void removerAmigo(Perfil amigo) {
        this._amigos.remove(amigo);
    }

    public void adicionarPostagem(Publicacao postagem) {
        this._postagens.add(postagem);
    }

    public ArrayList<Perfil> listarAmigos() {
        return new ArrayList<>(this._amigos);
    }

    public ArrayList<Publicacao> listarPostagens() {
        return new ArrayList<>(this._postagens);
    }

    public void ativarPerfil() {
        this._status = true;
    }

    public void desativarPerfil() {
        this._status = false;
    }
}
package classes;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class perfil {

    // Atributos
    private int _id;
    private String _apelido;
    private tipoInteracao _emoji;
    private String _email;
    private boolean _status;
    private ArrayList<perfil> _amigos;
    private ArrayList<String> _postagens;

    // Construtor
    public perfil(int id, String apelido, tipoInteracao emoji, String email, boolean status, ArrayList<perfil> amigos, ArrayList<String> postagens) {
        this._id = id;
        this._apelido = apelido;
        this._emoji = emoji;
        this._email = email;
        this._status = status;
        this._amigos = amigos;
        this._postagens = postagens;
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

    public tipoInteracao getEmoji() {
        return this._emoji;
    }

    public void setEmoji(tipoInteracao emoji) {
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
    public void adicionarAmigo(perfil amigo) {
        this._amigos.add(amigo);
    }

    public void removerAmigo(perfil amigo) {
        this._amigos.remove(amigo);
    }

    public void adicionarPostagem(String postagem) {
        this._postagens.add(postagem);
    }

    public List<perfil> listarAmigos(perfil perfilEspecifico) {
        return this._amigos.stream()
                .filter(amigo -> amigo.equals(perfilEspecifico))
                .collect(Collectors.toList());
    }

    public List<String> listarPostagens(perfil perfilEspecifico) {
        if (this.equals(perfilEspecifico)) {
            return new ArrayList<>(this._postagens);
        }
        return new ArrayList<>();
    }

    public void ativarPerfil() {
        this._status = true;
    }

    public void desativarPerfil() {
        this._status = false;
    }
}

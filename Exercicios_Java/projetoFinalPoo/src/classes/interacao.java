package classes;

public class interacao {
    private int _id;
    private tipoInteracao _tipo;
    private perfil _perfilAutor;

    // Construtor
    public interacao(int id, tipoInteracao tipo, perfil perfilAutor) {
        this._id = id;
        this._tipo = tipo;
        this._perfilAutor = perfilAutor;
    }

    // Getters e Setters
    public int getId() {
        return _id;
    }

    public void setId(int id) {
        this._id = id;
    }

    public tipoInteracao getTipo() {
        return _tipo;
    }

    public void setTipo(tipoInteracao tipo) {
        this._tipo = tipo;
    }

    public perfil getPerfilAutor() {
        return _perfilAutor;
    }

    public void setPerfilAutor(perfil perfilAutor) {
        this._perfilAutor = perfilAutor;
    }
}

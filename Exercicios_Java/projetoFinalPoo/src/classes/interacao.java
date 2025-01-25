package classes;

public class Interacao {
    // Atributos
    private static int contadorId = 0;
    private int _id;
    private TipoInteracao _tipo;
    private Perfil _perfilAutor;

    // Construtor
    public Interacao(TipoInteracao tipo, Perfil perfilAutor) {
        this._id = ++contadorId;
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

    public TipoInteracao getTipo() {
        return _tipo;
    }

    public void setTipo(TipoInteracao tipo) {
        this._tipo = tipo;
    }

    public Perfil getPerfilAutor() {
        return _perfilAutor;
    }

    public void setPerfilAutor(Perfil perfilAutor) {
        this._perfilAutor = perfilAutor;
    }
}
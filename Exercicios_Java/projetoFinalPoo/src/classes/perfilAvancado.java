package classes;

public class PerfilAvancado extends Perfil {
    
    // Construtor
	public PerfilAvancado(String apelido, EmojiConverter emoji, String email) {
		super(apelido, emoji, email);
	}

    // Métodos
    public void habilitarPerfil(Perfil perfil) {
        perfil.setStatus(true);
    }

    public void desabilitarPerfil(Perfil perfil) {
        perfil.setStatus(false);
    }
}
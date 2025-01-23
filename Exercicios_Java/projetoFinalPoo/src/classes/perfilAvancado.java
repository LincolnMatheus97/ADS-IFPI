package classes;

import java.util.ArrayList;

public class perfilAvancado extends perfil {
    
    // Construtor
	public perfilAvancado(int id, String apelido, tipoInteracao emoji, String email, boolean status, ArrayList<perfil> amigos, ArrayList<String> postagens) {
		super(id, apelido, emoji, email, status, amigos, postagens);
	}

    // Métodos
    public void habilitarPerfil(perfil perfil) {
        perfil.setStatus(true);
    }

    public void desabilitarPerfil(perfil perfil) {
        perfil.setStatus(false);
    }
}
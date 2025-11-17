import { ProfileCard } from './ProfileCard';
import './ProfileCard.css';
import { useState } from 'react';

export function ProfileList() {
    const [profiles, setProfiles] = useState([
        { id: 1, nome: 'Zinho', cargo: 'Gerente de Miau', imagemUrl: 'https://cobasiblog.blob.core.windows.net/production-ofc/2020/06/cuidar-de-gato-capa.png' }
    ]);

    const [formDados, setDados] = useState({
        nome: '',
        cargo: '',
        imagemUrl: ''
    });

    function handleAtualizarForm(evento) {
        const {name, value} = evento.target;
        setDados(dadosAnteriores => ({
            ...dadosAnteriores,
            [name]: value
        }));
    }
    
    function handleAdicionarProfile() {
        const novoProfile = {
            id: Date.now(),
            nome: formDados.nome,
            cargo: formDados.cargo,
            imagemUrl: formDados.imagemUrl
        };

        setProfiles(listaAnterior => [...listaAnterior, novoProfile]);

        setDados({ nome: '', cargo: '', imagemUrl: '' });
    }

    return (
        <div>
            <h3>Adicionar Novo Perfil</h3>
            <input 
                type="text"
                name="nome"
                value={formDados.nome}
                onChange={handleAtualizarForm}
                placeholder="Nome" 
            />
            <input 
                type="text" 
                name="cargo"
                value={formDados.cargo}
                onChange={handleAtualizarForm}
                placeholder="Cargo" 
            />
            <input 
                type="text" 
                name="imagemUrl"
                value={formDados.imagemUrl}
                onChange={handleAtualizarForm}
                placeholder="Url da Imagem" 
            />
            <button onClick={handleAdicionarProfile}>Adicionar Perfil</button>

            <hr />

            <ul>
                {profiles.map((profile) => (
                    <ProfileCard
                        key={profile.id}
                        nome={profile.nome}
                        cargo={profile.cargo}
                        imagemUrl={profile.imagemUrl}
                    />
                ))}
            </ul>
        </div>
    )
}
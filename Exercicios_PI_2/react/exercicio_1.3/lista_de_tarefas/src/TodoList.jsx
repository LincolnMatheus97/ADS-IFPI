import './TodoList.css';
import { useState } from 'react';

export function TodoList() {
    const [tarefas, setTarefas] = useState([
        'Estudar SOLID',
        'Estudar React'
    ]);

    const [novaTarefa, setNovaTarefa] = useState('');

    function handleAdicionarTarefa() {
        setTarefas([...tarefas, novaTarefa]);

        setNovaTarefa('');
    }

    return (
        <div className='cardStyle'>
            <div>
                <input type="text" 
                value={novaTarefa} 
                placeholder='Digite uma nova tarefa'
                onChange={(evento) => setNovaTarefa(evento.target.value)}
                />
                <button onClick={handleAdicionarTarefa}>Adicionar</button>
            </div>
            <ul>
                {tarefas.map((tarefa, index) => 
                    <li key={index}>{tarefa}</li>
                )}
            </ul>
        </div> 
    );
}
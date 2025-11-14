import { useState } from "react";
import './Contador.css';

export function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <div className="cardStyle">
            <p>Contador está em: {contador}</p>
            <button onClick={() => setContador((contador) => contador + 1)}>
                Aumenter Contador
            </button>
            <br />
            <button onClick={() => setContador((contador) => contador - 1)}>
                Diminuir Contador
            </button>
        </div>
    )
}
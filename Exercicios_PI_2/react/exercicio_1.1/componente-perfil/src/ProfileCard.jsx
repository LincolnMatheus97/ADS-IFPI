import './ProfileCard.css';

export function ProfileCard(props) {
    return (
        <div className="cardStyle">
            <img src= {props.imagemURL} alt={`Foto de ${props.nome}`} className="imgStyle"/>
            <h2>{props.nome}</h2>
            <p>{props.cargo}</p>
        </div>
    )
}
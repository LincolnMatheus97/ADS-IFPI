import './ProfileCard.css';

export function ProfileCard(props) {
    return(
        <div className="cardStyle">
            <img src={props.imagemUrl} alt={`Foto do ${props.nome}`} className="imgStyle"/>
            <p>{props.nome}</p>
            <p>{props.cargo}</p>
        </div>
    );
}
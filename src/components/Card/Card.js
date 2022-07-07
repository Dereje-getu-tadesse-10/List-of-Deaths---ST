import CardContent from './CardContent';
import '../styles/Card.css'
import data from '../data';

const Card = () => {

    const character = data.map((item) => {
        return (
            <CardContent key={item.id} {...item} />
        )
    })

    return (
        <div className="card">
            {character}
        </div>
    )
}

export default Card;
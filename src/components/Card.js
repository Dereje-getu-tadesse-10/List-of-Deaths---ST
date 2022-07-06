import CardContent from './CardContent';
import './styles/Card.css'
import data from './data';

const Card = () => {

    return (
        <div className="card">

            {data.map((item) => {
                return (
                    <CardContent key={item.id} photo={item.photo} victime={item.victime} episode={item.episode} causeOfDeath={item.causeOfDeath} killer={item.killer} />
                )
            })}
            
        </div>
    )
}

export default Card;
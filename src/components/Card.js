import CardContent from './CardContent';
import './styles/Card.css'
import data from './data';

const Card = () => {

    return (
        <div className="card">

            {data.map((item) => {
                return (
                    <CardContent key={item.id} {...item} />
                )
            })}
            
        </div>
    )
}

export default Card;
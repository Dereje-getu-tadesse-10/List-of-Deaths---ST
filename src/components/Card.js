import CardContent from './CardContent';
import './styles/Card.css'
import data from './data';

const Card = () => {

    const element = data.map((item) => {
        return (
            <CardContent key={item.id} {...item} />
        )
    })

    return (
        <div className="card">
            {element} 
        </div>
    )
}

export default Card;
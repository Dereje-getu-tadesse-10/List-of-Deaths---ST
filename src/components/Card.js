import CardContent from './CardContent';
import './styles/Card.css'

const Card = () => {
  return (
    <div className="card">
        <div className="card-header">
            <h2 className="title-red"> ST </h2>
        </div>
        <CardContent />
    </div>
  )
}

export default Card;
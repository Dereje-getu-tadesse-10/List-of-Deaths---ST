import { Alert } from "../SpoilerAlert/SpoilerAlert";


const CardContent = ({ photo, victime, episode, causeOfDeath, killer }) => {

    return (
        <div className="card-content">
            <Alert />
            <div className="card-content-header">
                <h2 className="title-red"> ST </h2>
            </div>
            <div className="card-content-body">
                <img src={photo} alt="img perso st"/>
                <div className="content-text">
                    <h3 className="victime-name">{victime}</h3>
                    <p>Episode : {episode}</p>
                    <p>Cause of death : {causeOfDeath}</p>
                    <p>Killer : {killer}</p>
                </div>
            </div>
        </div>
    )
}



export default CardContent;
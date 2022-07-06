

const CardContent = ({ photo, victime, episode, causeOfDeath, killer }) => {


    return (
        <div className="card-content">
            <div className="card-content-header">
                <h2 className="title-red"> ST </h2>
            </div>
            <div className="card-content-body">
                <div className="card-content-body-item">
                    <div className="card-content-body-item-photo">
                        <img src={photo} alt=""/>
                    </div>
                    <div className="card-content-body-item-text">
                        <h3 className="title-black">{victime}</h3>
                        <p className="text-black">{episode}</p>
                        <p className="text-black">{causeOfDeath}</p>
                        <p className="text-black">{killer}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default CardContent;
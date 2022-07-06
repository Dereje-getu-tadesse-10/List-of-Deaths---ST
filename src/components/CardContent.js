

const CardContent = (props) => {
console.log(props);

    return (
        <div className="card-content">
            <div className="card-content-header">
                <h2 className="title-red"> ST </h2>
            </div>
            <div className="card-content-body">
                <div className="card-content-body-item">
                    <div className="card-content-body-item-photo">
                        <img src={props.photo} alt=""/>
                    </div>
                    <div className="card-content-body-item-text">
                        <h3 className="title-black">{props.victime}</h3>
                        <p className="text-black">{props.episode}</p>
                        <p className="text-black">{props.causeOfDeath}</p>
                        <p className="text-black">{props.killer}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default CardContent;
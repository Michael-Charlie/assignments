export default function Card(props){
    const bgImg = {
        backgroundImage: `url(${props.img})`

    }
    return (
        <div className="spot" style={bgImg}>
            {/* <img className="image" src={`${props.img}`} /> */}
            <h4>{props.place}</h4>
            <p>${props.price}</p>
            <p>Best season: {props.timeToGo}</p>

        </div>
    )
}
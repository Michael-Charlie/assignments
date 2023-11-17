export default function Square(props) {
    const {color, btnText, onClick} = props
    return (
        <div>

        <div style={{backgroundColor: color}} className="box"></div>
        <button className="btn" onClick={onClick}>{btnText}</button>
        </div>
    )
}
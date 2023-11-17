export default function Buttons(props) {
    const {btnText, onClick} = props
    return (
        <div>
            <button onClick={onClick} className="btn">{btnText}</button>
        </div>
    )
}
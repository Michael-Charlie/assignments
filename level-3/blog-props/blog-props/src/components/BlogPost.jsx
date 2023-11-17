export default function BlogPost(props){
    return (
        <div className="blogs">
            
        <h2>{props.title}</h2>
        <h3>{props.subTitle}</h3>
        <p>Posted by {props.author}</p>
        <p>on {props.date}</p>

        </div>
    )
}
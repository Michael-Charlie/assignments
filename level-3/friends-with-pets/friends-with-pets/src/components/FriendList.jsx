import Pet from "./Pet"

export default function FriendList(props){
    const pets = props.pets.map((pet, index) => {
        return (
            <Pet
                key={index}
                {...pet}
            />
        )
    })
    
    return(
        <div>

            <h3>{props.name}</h3>
            <h4>{props.age}</h4>
            <div>
                {pets}
            </div>
            

        </div>
    )
}
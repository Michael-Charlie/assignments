import memesData from "../memesData"
import React from "react"

export default function Meme() {

    // const [memeImage, setMemeImage] = React.useState("")

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <div>

            <main>
                <div action="" className="form">

                    <input 
                    className="form--input" 
                    type="text" 
                    placeholder="top text" 
                    name="topText"
                    onChange={handleChange}
                    />

                    <input 
                    className="form--input" 
                    type="text" 
                    placeholder="bottom text" 
                    name="bottomText"
                    onChange={handleChange}
                    />

                    <button 
                    onClick={getMemeImage}
                    className="form--button"
                    >Get a new meme image
                    </button>
                </div>
                <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </main>

        </div>
    )
}
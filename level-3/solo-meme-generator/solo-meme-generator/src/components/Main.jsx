import { useState, useEffect } from 'react'

export default function Main(props) {
      const [meme, setMeme] = useState({
    //These are also key value pairs. topText is the key, the empty string is the value. Within an object.
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }
  // console.log(allMemes) - Value is the address, Key is the URL (key valued pairs)

  // allMemes is the parsed API ARRAY of OBJECTS. getMemeImage is a function added to the button that will fire when clicked. In the getMemeImage function, we set a variable to randomize allMemes using Math.floor() and Math.random().

  // Unsure about this part, but: Then we call the setMeme function, get the previous value of the details (which is what we have for our topText and our bottomText(?)) and only change the url using the variable we set url to (which is a jpg image from the url index in the object). This allows the TEXT we left for the meme and only changes the image. The randomImage value is changed from the default url in the meme useState to a random one from our useEffect API fetch request.


  function handleChange(event) {
    // console.log(event.target)
    const {name, value} = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }


  // Unsure about this part, but: For the handleChange function, we pass an event(I'm not sure why) and destructure name and value in a variable that equals target (I'm not sure what target is here, either). We set the meme calling the previous state of meme and only changing the name at it's value(?). Note: after looking at what we're returning below, I'm thinking the name/value destructured variable is referring to the name and value (value?) in the inputs.

  // Below it is imperative to have our input have a name, value and onChange value(idk what they terminology is for them). If I Recall, the name has to match what's in the meme useState variable. Both are topText/bottomText respectively. If you switched the name to top Text / bottom Text, it would break - appears it won't let you type in the inputs.

  // Target is the property of event object. Name and value are destructured from the target. In the console log of handleChange there's properties of name and value

  const [memeList, setMemeList] = useState([])

  function addMeme() {
    return (
      setMemeList(prevMemeList => ([
        ...prevMemeList,
        {...meme}
      ]))
    )
  }
  // Square brackets not curly{} 

    return (
    <div>

        <div className="form">
        <input 
        type="text" 
        placeholder="Top Text"
        className="form--input"
        name="topText"
        value={meme.topText}
        onChange={handleChange}
        />

        <input 
        type="text" 
        placeholder="Bottom Text"
        className="form--input"
        name="bottomText"
        value={meme.bottomText}
        onChange={handleChange}
        />
        <button
        className="form--button"
        onClick={getMemeImage}
        >
        Get a new meme image
        </button>
        </div>

        <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>

        <div>

        <button onClick={addMeme}>Add meme to list</button>

        <div>
        <img src={memeList} />
        </div>

        </div>

    </div>
    )
}
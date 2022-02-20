import React, { useEffect, useState } from "react";

export default function Meme() {
  const [allMemes, setAllMemes] = useState([])
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))    
  }, [])

  function getMemeImage() {
    const randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)]
    const newImage = randomMeme.url
    setMeme(prevMeme => ({...prevMeme, randomImage: newImage}))
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      <div className="form">
        <input
          type="text" 
          className="form--input" 
          name="topText" 
          placeholder="Top text"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text" 
          className="form--input" 
          name="bottomText" 
          placeholder="Bottom text"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button type="button" className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}
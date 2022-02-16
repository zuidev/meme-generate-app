import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [allMemeImages, setAllMemeImages] = useState(memesData)
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  function handleClick() {
    const memes = allMemeImages.data.memes
    const randomMeme = memes[Math.floor(Math.random() * memes.length)]
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
        <button type="button" className="form--button" onClick={handleClick}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}
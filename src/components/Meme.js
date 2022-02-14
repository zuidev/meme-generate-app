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

  return (
    <main>
      <form className="form">
        <input
          type="text" 
          className="form--input" 
          name="top-text" 
          placeholder="Top text"
          value={meme.topText}
        />
        <input
          type="text" 
          className="form--input" 
          name="bottom-text" 
          placeholder="Bottom text"
          value={meme.bottomText}
        />
        <button type="button" className="form--button" onClick={handleClick}>Get a new meme image 🖼</button>
        <img className="meme--image" src={meme.randomImage} alt="" />
      </form>
    </main>
  )
}
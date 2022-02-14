import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("")

  function handleClick() {
    const memes = memesData.data.memes;
    const randomMeme = memes[Math.floor(Math.random() * memes.length)]
    const newImage = randomMeme.url
    console.log(newImage)
    setMemeImage(newImage)
  }

  return (
    <main>
      <form className="form">
        <input
          type="text" 
          className="form--input" 
          name="top-text" 
          placeholder="Top text"
        />
        <input
          type="text" 
          className="form--input" 
          name="bottom-text" 
          placeholder="Bottom text"
        />
        <button type="button" className="form--button" onClick={handleClick}>Get a new meme image🖼</button>
        <img className="meme--image" src={memeImage} />
      </form>
    </main>
  )
}
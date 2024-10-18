import { useState } from 'react'
import './meme.css'
import allMemesData from '../../memesData.ts'

export default function Meme() {

    const [allMemes, setAllMemes] = useState(allMemesData.data.memes)
    const [meme, setMeme] = useState({
        memeImage: allMemes[Math.floor(Math.random() * allMemes.length)].url,
        topText: '',
        bottomTemxt: ''
    })

    function changeMeme() {
        setAllMemes(allMemesData.data.memes)
        setMeme({
            memeImage: allMemes[Math.floor(Math.random() * allMemes.length)].url,
            topText: '',
            bottomTemxt: ''
        })
    }

    return (
        <main className='main'>
            <div className="form">
                <div className="form--box">
                    <label className="form--title" htmlFor='top-text'>Top text</label>
                    <input 
                        className="form--input"
                        type="text"
                        id="top-text"
                        placeholder="Shut up"/>
                </div>
                <div className="form--box">
                    <label className="form--title" htmlFor='bottom-text'>Bottom text</label>
                    <input 
                        className="form--input"
                        type="text"
                        id="bottom-text"
                        placeholder="and take my money"/>
                </div>
                <button onClick={changeMeme} className="form--button">
                    Get a new meme image 😂
                </button>
            </div>
            <img className='memeImage' src={meme.memeImage}/>
        </main>
    );
}
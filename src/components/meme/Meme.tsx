import { useState, useEffect } from 'react'
import './meme.css'

export default function Meme() {

    type memeApiCall = {
        id: string,
        name: string,
        url: string,
        width: number,
        height: number,
        box_count: number,
        captions: number
    }

    const [allMemes, setAllMemes] = useState<memeApiCall[] | undefined>(undefined)
    const [meme, setMeme] = useState({
        memeImage: 'http://i.imgflip.com/1bij.jpg',
        topText: 'One does not simply',
        bottomText: 'walk into Mordor'
    })

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function changeMeme() {
        if (!allMemes) return
        setMeme({
            memeImage: allMemes[Math.floor(Math.random() * allMemes.length)].url,
            topText: 'Top',
            bottomText: 'Bottom'
        })
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setMeme(prevMeme => {
            return ({
            ...prevMeme,
            [event.target.name]: event.target.value
            })
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
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}/>
                </div>
                <div className="form--box">
                    <label className="form--title" htmlFor='bottom-text'>Bottom text</label>
                    <input 
                        className="form--input"
                        type="text"
                        id="bottom-text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}/>
                </div>
                <button onClick={changeMeme} className="form--button">
                    Get a new meme image 😂
                </button>
            </div>
            <div className='meme'>
                <img className='memeImage' src={meme.memeImage}/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}

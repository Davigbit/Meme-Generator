import './meme.css'

export default function Meme() {
    return (
        <main className='main'>
            <form className="form">
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
                <button className="form--button">
                    Get a new meme image 😂
                </button>
            </form>
        </main>
    );
}
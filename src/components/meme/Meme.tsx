import './meme.css'

export default function Meme() {
    return (
        <main>
            <form className="form">
                <div className="form--box">
                    <h4 className="form--title">Top text</h4>
                    <input 
                        className="form--input"
                        type="text"/>
                </div>
                <div className="form--box">
                    <h4 className="form--title">Bottom text</h4>
                    <input 
                        className="form--input"
                        type="text"/>
                </div>
                <button className="form--button">
                    Get a new meme image 🍒🖐🍑🖐😂
                </button>
            </form>
        </main>
    );
}
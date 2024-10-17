import trollFace from '../../assets/face.png'
import './navbar.css'

export default function Navbar() {
    return (
        <header className='navbar'>
            <img src={trollFace}/>
            <h2>Meme Generator</h2>
        </header>
    );
}
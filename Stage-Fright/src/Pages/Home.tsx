import './Home.css'
import album from '/AlbumCoverTri.jpg'
import Button from '../Components/Button'
import spotify from '/spotify.svg'
export function Home(){
    return(
        <>
            <div id='content'>
            <div id='Banner'></div>
            <div id='Releases'>
                <h1>R E L E A S E S</h1>
                <h2>A L B U M S</h2>
                <div id='album-cover'>
                    <img id='album'src={album} alt='album cover'/>
                    <p>P U R G E</p>
                    <a><img id='spotify'src={spotify}/></a>
                </div>
                <h2>S I N G L E S</h2>
            </div>
            <div id='Merch'>
                <h1>T O P S E L L E R S</h1>
                
            </div>
            </div>
            
        </>
    )
}
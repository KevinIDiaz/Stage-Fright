import './Home.css'
import album from '/album cover.jpg'
import {Button} from './Button'
export function Home(){
    return(
        <>
            <div id='content'>
            <div id='Banner'></div>
            <div id='Releases'>
                <h1>R E L E A S E S</h1>
                <img id='album'src={album} alt='album cover'/>
            </div>
            <div id='Merch'>
                <h1>T O P S E L L E R S</h1>
                {Button()}
            </div>
            </div>
            
        </>
    )
}
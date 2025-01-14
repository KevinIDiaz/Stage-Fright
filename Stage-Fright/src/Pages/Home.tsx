import './Home.css'
import album from '/AlbumCoverTri.jpg'
import Button from '../Components/Button'
import spotify from '/spotify.svg'
import video from '/concertVid.mp4'
import SinglesCarousel from '../Components/SinglesCarousel';
import { Link } from "react-router-dom"


export function Home(){
    const singles = [
        {
            image:'/AlbumCoverTri.jpg',
            name: 'option 1'
        },
        {
            image:'/album cover.jpg',
            name: 'option 2'
        },
        {
            image:'/AlbumCoverTri.jpg',
            name: 'option 3'
        },
        {
            image:'/album cover.jpg',
            name: 'option 4'
        },
        {
            image:'/AlbumCoverTri.jpg',
            name: 'option 5'
        },
        {
            image:'/album cover.jpg',
            name: 'option 6'
        },
       
      ]
    return(
        <>
            <div id='content'>
            <div id='Banner'>
                <video src={video} muted loop autoPlay id='banner-video'></video>
                <div id='overlay'>
                    <Link to = "/4/Tour"><button id='overlay-button'>PURGE TOUR</button></Link>
                    
                </div>
            </div>
            
            <div id='Releases'>
                <h1>RELEASES</h1>
                <h2>ALBUMS</h2>
                <div id='album-cover'>
                    <img id='album'src={album} alt='album cover'/>
                    <p>PURGE</p>
                    <a><img id='spotify'src={spotify}/></a>
                </div>
                <h2>SINGLES</h2>
                <div id='singles-container'>
                    <div className='single'>
                        <img className='single-image'src="AD787075-1F2C-44B3-A3AF-BD9593AE2FB5.JPEG"/>
                        <div className="single-details">
                        <p>PURGE</p>
                        <a><img src={spotify}/></a>
                        </div>
                    </div>
                    <div className='single'>
                        <img className='single-image'src="IMG_20250113_161046_674.jpg"/>
                        <div className="single-details">
                        <p>PURGE</p>
                        <a><img src={spotify}/></a>
                        </div>
                    </div>
                    <div className='single'>
                        <img className='single-image'src="IMG_4836_Original.jpg"/>
                        <div className="single-details">
                        <p>PURGE</p>
                        <a><img src={spotify}/></a>
                        </div>
                    </div>
                    <div className='single'>
                        <img className='single-image'src="IMG_20250113_161019_722.jpg"/>
                        <div className="single-details">
                        <p>PURGE</p>
                        <a><img src={spotify}/></a>
                        </div>
                    </div>
                    <div className='single'>
                        <img className='single-image'src="IMG_20250113_161035_358.jpg"/>
                        <div className="single-details">
                        <p>PURGE</p>
                        <a><img src={spotify}/></a>
                        </div>
                    </div>
                    <div className='single'>
                        <img className='single-image'src="2A63AA84-C922-4BBA-8969-6460795F4772.JPEG"/>
                        <div className="single-details">
                        <p>PURGE</p>
                        <a><img src={spotify}/></a>
                        </div>
                    </div>
                    <div className='single'>
                        <img className='single-image'src="IMG_20250113_161044_364.jpg"/>
                        <div className="single-details">
                        <p>PURGE</p>
                        <a><img src={spotify}/></a>
                        </div>
                    </div>
                    <div className='single'>
                        <img className='single-image'src={album}/>
                        <div className="single-details">
                        <p>PURGE</p>
                        <a><img src={spotify}/></a>
                        </div>
                    </div>
                    

                </div>
            
         </div>
            <div id='Merch'>
                <h1>TOP SELLERS</h1>\
                <div className='slider-container'>
                <SinglesCarousel cards={singles}/>
                </div>
                
                     
                
                
                
            </div>
            </div>
            
        </>
    )
}
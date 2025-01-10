import './Home.css'
import album from '/AlbumCoverTri.jpg'
import Button from '../Components/Button'
import spotify from '/spotify.svg'
import video from '/concertVid.mp4'
import SinglesCarousel from '../Components/SinglesCarousel';
export function Home(){
    const singles = [
        '/AlbumCoverTri.jpg',
        '/album cover.jpg',
        '/AlbumCoverTri.jpg',
      ];
    return(
        <>
            <div id='content'>
            <div id='Banner'>
                <video src={video} muted loop autoPlay id='banner-video'></video>
                <div id='overlay'></div>
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
                        <img className='single-image'src={album}/>
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
                    <div className='single'>
                        <img className='single-image'src={album}/>
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
                    <div className='single'>
                        <img className='single-image'src={album}/>
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
                    <div className='single'>
                        <img className='single-image'src={album}/>
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
                <h1>TOPSELLERS</h1>
                
            </div>
            </div>
            
        </>
    )
}
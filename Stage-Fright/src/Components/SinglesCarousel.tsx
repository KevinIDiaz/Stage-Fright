import './SinglesCarousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"
import Slider from "react-slick";

interface singlesCards {
    image : string
    name : string
}


export default function SinglesCarousel({cards} : {cards:singlesCards[]}){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:2000,
        cssEase: "linear",  
        
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      
      };
    

    return(
        <>
        <Slider {...settings}>
            {cards.map((card)=>(
            <div className='card'>
                <div className='card-cover'>
                    <Link><img src={card.image}/></Link>
                </div>
                <div className="card-text">
                    <p>{card.name}</p>
                </div>
            
        </div>

        ))}
        </Slider>
        </>
        
        

        
        
    )

}


import './SinglesCarousel.css'

interface singlesCards {
    image : string
    name : string
}

export default function SinglesCarousel({card} : {card:singlesCards}){
    

    return(
        <div className='card-cover'>
            <img src={card.image} className='card'></img>
        </div>
    )

}

